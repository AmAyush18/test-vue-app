<template>
    <h2 class="text-center text-3xl text-orange-200 font-semibold my-3">Map Game, Play around..!!</h2>
    <div class="w-[95%] mx-auto flex flex-col gap-2 md:flex-row md:justify-between items-center">
        <div id="map" class="w-full md:w-[75%] min-h-[85vh] border border-teal-300 rounded-md"></div>
        <div class="md:w-[22%] border border-orange-200 px-3 py-2 rounded-md space-y-4">
            <h1 class="text-lg font-semibold text-pink-100">Map Zones</h1>
            <div v-if="!showAdd">
                <button v-on:click="showAdd = !showAdd" class="border rounded-md px-7 w-full py-2 font-semibold text-green-500 border-green-500
            hover:bg-green-500 hover:text-white transition-colors duration-300 ease-in
            ">Add a new location</button>
            </div>
            <div v-if="showAdd" class="flex flex-col gap-y-2">
                <input v-model="zoneName" placeholder="Enter zone name" class="w-full border border-blue-200 bg-transparent rounded-md px-3 py-2">
                <button @click="cancelAdd" class="border rounded-md px-7 w-full py-2 font-semibold text-red-500 border-red-500
                    hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in"
                >
                    Cancel
                </button>
                <button @click="saveZone" class="border rounded-md px-7 w-full py-2 font-semibold text-blue-500 border-blue-500
                    hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in"
                >
                    Save Zone
                </button>
            </div>
            <div class="border-t-2 border-dashed border-teal-200 w-full h-2 mt-5" />
            <h2 class="text-lg font-semibold text-purple-300">Saved Zones</h2>
            <div class="flex flex-col gap-y-1" v-for="(zone, id) in zones" :key="id">
                <span class="w-full flex justify-between py-2 px-2 border rounded-md border-pink-200">
                    <p class="text-sm font-semibold text-orange-200">{{ zone.name }}</p>
                    <span class="flex gap-x-2 text-sm font-bold">
                        <button class="py-1 px-2 bg-blue-400">
                            E
                        </button>
                        <button class="py-1 px-2 bg-red-400">
                            D
                        </button>
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
import { onMounted, ref } from "vue";
import { projectFirestore } from '../../firebase/config.js'
import getZones from '../../firebase/getZones'

const { zones, load, error } = getZones()

const zoneName = ref("");

const showAdd = ref(false);
let map: google.maps.Map;
let polygon: google.maps.Polygon | null = null;

const loader = new Loader({
    apiKey: "AIzaSyDdO-p2vd8fMG4W8CkeOfBhc22iz2Iwcqk",
    version: "weekly",
});

onMounted(async () => {
    await loader.load();
    map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 26.7922, lng: 82.1998 },
        zoom: 8,
    });
    map.addListener("click", (event) => {
        if (showAdd.value) {
            addPoint(event.latLng);
        }
    });
});

function addPoint(latLng: google.maps.LatLng) {
    if (!polygon) {
        polygon = new google.maps.Polygon({
            strokeColor: "#c2410c",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#fdba74",
            fillOpacity: 0.35,
            editable: true,
            draggable: true,
            map: map,
        });
    }
    const path = polygon.getPath();
    path.push(latLng);
}

async function saveZone() {
    if (!polygon && !zoneName.value) return;
    const path = polygon.getPath().getArray().map((latLng) => ({
        lat: latLng.lat(),
        lng: latLng.lng(),
    }));

    const res = await projectFirestore.collection('zones').add({name: zoneName.value,
            path: path,})
    console.log(res)
    load()
    cancelAdd()
}

function cancelAdd() {
    if (polygon) {
        polygon.setMap(null);
        polygon = null;
    }
    showAdd.value = false;
}
</script>

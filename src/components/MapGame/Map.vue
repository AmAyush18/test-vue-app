<template>
    <h2 class="text-center text-3xl text-orange-200 font-semibold my-3">Map Game, Play around..!!</h2>
    <div class="w-[95%] mx-auto flex flex-col gap-y-4 md:flex-row md:justify-between items-center">
        <div id="map" class="w-full md:w-[75%] min-h-[85vh] border border-teal-300 rounded-md"></div>
        <div class="w-[95%] md:w-[22%] border border-orange-200 px-3 py-2 rounded-md space-y-4">
            <h1 class="text-lg font-semibold text-pink-100">Map Zones</h1>
            <div v-if="!showAdd">
                <button v-on:click="showAdd = !showAdd" class="border rounded-md px-7 w-full py-2 font-semibold text-green-500 border-green-500
            hover:bg-green-500 hover:text-white transition-colors duration-300 ease-in
            ">Add a new location</button>
            </div>
            <div v-if="showAdd" class="flex flex-col gap-y-2">
                <input v-model="zoneName" placeholder="Enter zone name" class="w-full border border-blue-200 bg-transparent rounded-md px-3 py-2">
                <button @click="undoLastPoint" class="w-full border rounded-md px-4 py-2 font-semibold text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors duration-300 ease-in">
                    Undo
                </button>
                <div class="w-full flex justify-between">
                    <button @click="saveZone" class="border rounded-md px-7 w-[49%] py-2 font-semibold text-blue-500 border-blue-500
                        hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in"
                    >
                        Save Zone
                    </button>
                    <button @click="cancelAdd" class="border rounded-md px-7 w-[49%] py-2 font-semibold text-red-500 border-red-500
                        hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in"
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <div class="border-t-2 border-dashed border-teal-200 w-full h-2 mt-5" />
            <div class="py-2 px-2 border border-dashed border-blue-300 w-full flex justify-between items-center">
                <h3 class="text-[16px] font-semibold text-blue-500">All zones</h3>
                <button @click="toggleAllZones" class="border rounded-md px-4 py-1 font-semibold text-violet-500 border-violet-500 hover:bg-violet-400 hover:text-white transition-colors duration-300 ease-in">
                    {{ showZones ? 'Hide' : 'Show' }}
                </button>
            </div>
            <h2 class="text-lg font-semibold text-purple-300">Saved Zones</h2>
            <div class="flex flex-col gap-y-1" v-for="(zone, id) in zones" :key="id">
                <span class="w-full cursor-pointer flex justify-between py-2 px-2 border rounded-md border-pink-200">
                    <p class="text-sm font-semibold text-orange-200">{{ zone.name }}</p>
                    <span class="flex gap-x-2 text-sm font-bold">
                        <button @click="handleSelectZone(zone.id)" class="py-1 px-2 bg-blue-400">
                            E
                        </button>
                        <button @click="handleDeleteZone(zone.id)" class="py-1 px-2 bg-red-400">
                            D
                        </button>
                    </span>
                </span>
            </div>
            <div v-if="selectedZone" class="flex flex-col gap-y-2">
                <input v-model="selectedZone.name" placeholder="Enter new zone name" class="w-full border border-blue-200 bg-transparent rounded-md px-3 py-2">
                <span class="w-full flex justify-between">

                    <button @click="updateZone" class="border rounded-md px-7 w-[48%] py-2 font-semibold text-blue-500 border-blue-500
                            hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in"
                    >
                        Save
                    </button>
                    <button @click="cancelAdd" class="border rounded-md px-7 w-[48%] py-2 font-semibold text-red-500 border-red-500
                            hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in"
                    >
                        Cancel
                    </button>
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Loader } from "@googlemaps/js-api-loader";
import { onMounted, ref } from "vue";
import { projectFirestore, timestamp } from '../../firebase/config.js'
import getZones from '../../firebase/getZones'

const { zones, load, error } = getZones()

const zoneName = ref("");
const selectedZone = ref<any>(null);
const showAdd = ref(false);
const showZones = ref(true);

let map: google.maps.Map;
let polygon: google.maps.Polygon | null = null;
let zonePolygons: google.maps.Polygon[] = [];

const loader = new Loader({
    apiKey: "AIzaSyDdO-p2vd8fMG4W8CkeOfBhc22iz2Iwcqk",
    version: "weekly",
    libraries: ['geometry']
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

    loadZones()
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

async function loadZones() {
    await load();
    zones.value.forEach((zone) => {
        const path = zone.path.map(point => new google.maps.LatLng(point.lat, point.lng));
        const color = getRandomColor()
        const polygon = new google.maps.Polygon({
            paths: path,
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.45,
            map: map,
        });
        zonePolygons.push(polygon);
    });
}

function toggleAllZones() {
    showZones.value = !showZones.value;
    zonePolygons.forEach(polygon => {
        polygon.setMap(showZones.value ? map : null);
    });
}

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

function undoLastPoint() {
    if (polygon) {
        const path = polygon.getPath();
        if (path.getLength() > 0) {
            path.pop();
        }
    }
}

function editZone(path: any) {
    if(showZones.value){
        toggleAllZones()
    }
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
    polygon.setPath(path.map((point: {lat: number, lng: number}) => new google.maps.LatLng(point.lat, point.lng)));
}

function checkZonesIntersection(zone1: google.maps.Polygon, zone2: google.maps.Polygon): boolean {
    const path1 = zone1.getPath().getArray();
    const path2 = zone2.getPath().getArray();

    // Check if any vertex of zone1 is inside zone2
    for (let i = 0; i < path1.length; i++) {
        if (google.maps.geometry.poly.containsLocation(path1[i], zone2)) {
            return true;
        }
    }

    // Check if any vertex of zone2 is inside zone1
    for (let i = 0; i < path2.length; i++) {
        if (google.maps.geometry.poly.containsLocation(path2[i], zone1)) {
            return true;
        }
    }

    return false;
}

async function saveZone() {
    if (!polygon && !zoneName.value) return;

    // Check for intersection/overlaps within existing zones
    for (const oldZone of zonePolygons) {
        if (checkZonesIntersection(polygon, oldZone)) {
            alert("New zone overlaps with an existing zone. Please adjust the boundaries.");
            return;
        }
    }

    const path = polygon.getPath().getArray().map((latLng) => ({
        lat: latLng.lat(),
        lng: latLng.lng(),
    }));

    const res = await projectFirestore.collection('zones').add({
            name: zoneName.value,
            path: path,
            createdAt: timestamp()
        })
    // console.log(res)
    load()
    zonePolygons.push(polygon)
    cancelAdd()
}

async function handleDeleteZone(id: string) {
    await projectFirestore.collection('zones')
        .doc(id)
        .delete()
    
    load()
}

const handleSelectZone = async (id: string) => {

    const res = await projectFirestore.collection('zones')
                .doc(id)
                .get()
                
    selectedZone.value = { ...res.data(), id: res.id }
    editZone(selectedZone.value.path)
    // console.log(selectedZone.value.path)
}

const editZoneName = (zone: any) => {
    selectedZone.value = { ...zone }
}

async function updateZone() {
    if (!polygon || !selectedZone.value) return;

    // Check for intersection/overlaps within existing zones
    for (const oldZone of zonePolygons) {
        if (oldZone !== polygon && checkZonesIntersection(polygon, oldZone)) {
            alert("Updated zone overlaps with an existing zone. Please adjust the boundaries and try again!");
            return;
        }
    }
    
    const path = polygon.getPath().getArray().map((latLng) => ({
        lat: latLng.lat(),
        lng: latLng.lng(),
    }));

    await projectFirestore.collection('zones')
        .doc(selectedZone.value.id)
        .update({
            name: selectedZone.value.name,
            path: path
        })
    
    load()
    selectedZone.value = null;
    if (polygon) {
        polygon.setMap(null);
        polygon = null;
    }
}

function cancelAdd() {
    if (polygon) {
        polygon.setMap(null);
        polygon = null;
    }
    showAdd.value = false;
    selectedZone.value = null;
}
</script>

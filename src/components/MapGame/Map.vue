<script setup>
import { GoogleMap, Polygon  } from 'vue3-google-map'

// const center = { lat: 26.7922, lng: 82.1998 }
const center = { lat: 24.886, lng: -70.268 }
const triangleCoords = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 25.774, lng: -80.19 },
]
const bermudaTriangle = {
  paths: triangleCoords,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
}
</script>

<template>
    <h2 class="text-3xl font-semibold text-orange-200 text-center my-9">Protected Map View Page</h2>
    <GoogleMap
        api-key="AIzaSyDdO-p2vd8fMG4W8CkeOfBhc22iz2Iwcqk"
        style="width: 100%; height: 540px"
        :center="center"
        :zoom="15"
    >
        <Polygon :options="bermudaTriangle" />
    </GoogleMap>
</template>

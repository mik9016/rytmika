<script setup lang="ts">

const items = [
  "Start",
  "O mnie",
  "Opis zajęć",
  "Lokalizacja",
  "Zarezerwuj miejsce",
  "Kontakt",
]

</script>

<template>
  <ul class="w-full flex h-24 items-center justify-center gap-8">
    <li v-for="item in items">
      <a :href="item" class="cursor-pointer">{{ item }}</a>
    </li>
  </ul>
 
</template>
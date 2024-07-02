<script setup lang="ts">

const items = [
{text:"Start",path: "/"},
{text:"O mnie",path: "omnie"},
{text:"Opis zajęć",path: "/opiszajec"},
{text:"Lokalizacja",path: "/lokalizacja"},
{text:"Zarezerwuj miejsce",path: "/zarezerwuj"},
{text:"Kontakt",path: "/kontakt"},
]

</script>

<template>
  <ul class="w-full flex h-24 items-center justify-center gap-8 text-dark">
    <li v-for="item in items">
      <a :href="`#${item.path}`" class="cursor-pointer hover:underline-offset-8 hover:underline hover:decoration-orange hover:decoration-[8px] ">{{ item.text }}</a>
    </li>
  </ul>
 
</template>
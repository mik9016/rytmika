<script setup lang="ts">

const items = [
{text:"Start",path: "/"},
{text:"O mnie",path: "omnie"},
{text:"Opis zajęć",path: "opiszajec"},
{text:"Lokalizacja",path: "lokalizacja"},
{text:"Kontakt",path: "kontakt"},
]

</script>

<template>
  <ul class="w-full flex h-24 items-center text-xl justify-center gap-8 text-dark sticky top-0 z-30 bg-white">
    <li v-for="item in items">
      <a :href="`#${item.path}`" class="cursor-pointer hover:underline-offset-8 hover:underline hover:decoration-orange hover:decoration-[8px]">{{ item.text }}</a>
    </li>
  </ul>
 
</template>
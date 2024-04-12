<script setup lang="ts">
//
import { ref } from 'vue'
const sectionOpen = ref(1)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <section>
    <button class="text-xl" @pointerdown="sectionOpen = 1">bouton 1</button>
    <p v-show="sectionOpen == 1">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et omnis officia dolore impedit
      quasi eum, nobis iste qui laboriosam libero sint praesentium perspiciatis sequi doloremque
      aliquam ipsam neque vitae nulla!
    </p>
  </section>
  <section>
    <button class="text-xl" @pointerdown="sectionOpen = 2">bouton 2</button>
    <p v-show="sectionOpen == 2">
      Perspiciatis provident eligendi dolorem, deserunt molestias, labore ad odit perferendis
      itaque, praesentium aliquid numquam consequatur officia? Dicta voluptatum, dolores totam
      doloremque autem beatae recusandae corrupti molestiae ex, aut, ea iure.
    </p>
  </section>
  <section>
    <button class="text-xl" @pointerdown="sectionOpen = 3">bouton 3</button>
    <p v-show="sectionOpen == 3">
      Adipisci quo, hic est in repellat perspiciatis, nulla odit dicta doloribus quia, cupiditate
      labore libero eos exercitationem autem! Consectetur cupiditate dolore quaerat cum nobis
      mollitia aliquam ipsa vero optio praesentium?
    </p>
  </section>
</template>
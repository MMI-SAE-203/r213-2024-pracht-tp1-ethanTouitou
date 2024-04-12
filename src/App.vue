<script setup lang="ts">
import { ref } from 'vue'
const menuIsOpen = ref(false)
</script>

<template>
  <header>
    <button
      @pointerdown="menuIsOpen = !menuIsOpen"
      aria-controls="mainNav"
      aria-expanded="true"
      class="rounded-full border-2 border-red-600 bg-red-300 px-2"
    >
      menu
    </button>
    <Transition
      class="transition-transform duration-1000"
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="-translate-x-full"
    >
      <!-- nav#mainNav>ul>li*3>a[href="#"]{item $} -->
      <nav id="mainNav" v-show="menuIsOpen">
        <ul>
          <li><RouterLink to="/">accueil</RouterLink></li>
          <li><RouterLink to="/accordeon">accordeon</RouterLink></li>
          <li><RouterLink to="/boucle">boucle</RouterLink></li>
        </ul>
      </nav>
    </Transition>
    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="text-red-500 underline"> Accueil </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>

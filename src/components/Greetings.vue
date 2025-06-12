<template>
  <section class="max-w-3xl mx-auto">
    <div class="text-center w-full text-3xl md:text-6xl font-extralight">
      <span is="type-async" ref="typer1"></span>
      <span class="blinking-cursor">_</span>
    </div>
    <div class="text-right w-full text-xl md:text-4xl font-extrabold mt-3">
      <span is="type-async" ref="typer2"></span>
      <span class="blinking-cursor">_</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typer1 = ref(null)
const typer2 = ref(null)

const sleep = (time) => new Promise(resolve => setTimeout(resolve, time))

const getTypeInterval = () => {
  const randomMs = 100 * Math.random()
  return randomMs < 50 ? 10 : randomMs
}

async function typeText(node, text) {
  for (let char of text) {
    node.innerText += char
    await sleep(getTypeInterval())
  }
}

async function deleteText(node, text) {
  for (let i = 0; i < text.length; i++) {
    node.innerText = node.innerText.slice(0, -1)
    await sleep(getTypeInterval())
  }
}

const type1 = async() => {
  const node = typer1.value

  await sleep(1000)
  node.innerText = ''
  await typeText(node, 'Hello ')
  await typeText(node, 'Ardito!')
  await sleep(2000)
  await deleteText(node, 'Ardito!')
  await typeText(node, 'People!')
}

const type2 = async() => {
  const node = typer2.value

  await sleep(1000)
  node.innerText = ''
  await typeText(node, "I'm ")

  const words = [
    'People!',
    'Ardito!',
    'Frontend Developer',
    'Backend Developer',
    'Software Developer',
    'Batm-',
    'The Guy, that u need.',
  ]
  let idx = 0
  while (true) {
    if (idx > words.length - 1) {
      idx = 0
    }
    const word = words[idx] ?? ''
    await typeText(node, word)
    await sleep(2000)
    await deleteText(node, word)
    idx++
  }
}

onMounted(async () => {
  type1()
  type2()
})
</script>


<style lang="sass" scoped>
    
.blinking-cursor
  user-select: none
  animation: blink 1s steps(2, start) infinite
  
  @keyframes blink
    to
      visibility: hidden

</style>

<script setup lang="ts">
import { ref } from 'vue'
import { Player } from './models/Player'
import { SolarSystem } from './models/SolarSystem'

enum View {
  INITIAL = 'initial',
  GAME = 'game'
}

enum Command {
  HELP = 'help',
  STATIONS = 'stations',
  MOVE = 'move <station>'
}

const view = ref<View>(View.INITIAL)

const name = ref<string>('')

const player = ref<Player>()

const solarSystem = ref<SolarSystem>(new SolarSystem())

const messages = ref<string[]>([])

function enterName() {
  console.log('enter name')
  if (name.value.length > 0) {
    view.value = View.GAME
    initGame()
    startGame()
  }
}

async function initGame() {
  player.value = new Player(name.value)

  messages.value.push(`Hello ${player.value.name}`)
  messages.value.push(`Enter the help command to find out what you can do!`)
}

function startGame() {}

const command = ref<string>('')

function enterCommand() {
  messages.value.push(`> ${command.value}`)
  const cmd = Object.values(Command).find(c => c === command.value)

  command.value = ''

  if (!cmd) {
    messages.value.push('Invalid command')
    return
  }

  if (cmd === Command.HELP) {
    messages.value.push('Available Commands')
    Object.values(Command).forEach(c => messages.value.push(c))
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full w-full bg-neutral-800 text-white">
    <form
      v-if="view === View.INITIAL"
      @submit.prevent="enterName"
    >
      <input
        v-model="name"
        placeholder="Enter your name"
        class="p-4 bg-neutral-900 rounded-lg text-white"
        @keyup.Enter="enterName()"
      />
    </form>
    <transition
      name="fade"
      v-else
    >
      <div
        class="flex flex-col justify-center items-center h-full w-full bg-neutral-800 text-white"
      >
        <div class="w-1/2 h-1/2 bg-neutral-950 rounded-lg flex items-end p-4 overflow-hidden">
          <div class="flex flex-col">
            <div v-for="message in messages">
              {{ message }}
            </div>
          </div>
        </div>
        <form
          @submit.prevent="enterCommand"
          class="w-1/2"
        >
          <input
            v-model="command"
            class="mt-4 p-4 bg-neutral-900 rounded-lg text-white w-full"
            placeholder="Enter command"
          />
        </form>
      </div>
    </transition>
  </div>
</template>

<style>
#app {
  height: 100vh;
}

body {
  height: 100vh;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

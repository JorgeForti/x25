<script>
export default {
  name: 'toolsEscritorio',
  props: {
    e: Array
  }
}
</script>

<template>
  <v-row>
    <v-col cols="6" xs="6" sm="3" md="2" xl="1" v-for="i in e" :key="i.ref">
      <v-card
      hover
        elevation="2"
        density="compact"
        variant="tonal"
        :disabled="i.disabled"
        style="opacity: 0.8"
        class="rounded-lg"
      >
        <v-card-title>
          <v-icon :icon="i.icon" size="large" />
        </v-card-title>
        <v-card-text>
          {{ i.title }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

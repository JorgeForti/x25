<script>
export default {
  name: 'toolsGaveta',

  props: {
    e: Array,
    a: String,
    u: String
  },
}
</script>

<template>
  <v-row>
    <!-- titulo -->
    <v-col cols="12">
      <v-chip
        closable
        density="default"
        size="x-large"
        elevation="2"
        @click:close="false"
        style="width: 100%"
      >
        <b>{{ a }}</b
        >&nbsp;({{ u }})
      </v-chip>
    </v-col>

    <!-- Lista -->
    <v-col cols="12">
      <v-card class="rounded-xl" elevation="5">
        <v-card-text>
          <v-list density="compact" nav>
            <v-list-item
            hover 
              v-for="i in e"
              :key="i.ref"
              :prepend-icon="i.icon"
              :title="i.title"
              :disabled="i.disabled"
            >
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Gaveta from './components/gaveta.vue'
import Escritorio from './components/escritorio.vue'

export default {
  name: 'App',
  components: {
    gaveta: Gaveta,
    escritorio: Escritorio,
  },

  setup() {
    const escritorioElementos = [
      {
        clase: 'SISTEMA',
        ref: 'SIS-ALIADOS',
        icon: 'mdi-account-hard-hat',
        title: 'Aliados',
        disabled: true,
        to: '/sistema/aliados'
      },
      {
        clase: 'SISTEMA',
        ref: 'SIS-PARAMETROS',
        icon: 'mdi-tune',
        title: 'Parametros',
        disabled: false,
        to: '/sistema/parametros'
      },
      {
        clase: 'SISTEMA',
        ref: 'SIS-USUARIOS',
        icon: 'mdi-badge-account',
        title: 'Usuarios',
        disabled: true,
        to: '/sistema/usuarios'
      },
      {
        clase: 'SISTEMA',
        ref: 'SIS-IMPORTAR',
        icon: 'mdi-download',
        title: 'Importar',
        disabled: true,
        to: '/sistema/importar'
      },
      {
        clase: 'SISTEMA',
        ref: 'SIS-SERVIDOR',
        icon: 'mdi-server',
        title: 'Servidor',
        disabled: false,
        to: '/sistema/servidor'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-CUENTAS',
        icon: 'mdi-folder-account',
        title: 'Cuentas',
        disabled: true,
        to: '/cuentas/cuentas'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-DOCUMENTOS',
        icon: 'mdi-file-document',
        title: 'Documentos',
        disabled: true,
        to: '/cuentas/documentos'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-COMPRAS',
        icon: 'mdi-cart-arrow-down',
        title: 'Compras',
        disabled: true,
        to: '/cuentas/compras'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-VENTAS',
        icon: 'mdi-cart-arrow-up',
        title: 'Ventas',
        disabled: true,
        to: '/cuentas/ventas'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-COMPROBANTES',
        icon: 'mdi-printer',
        title: 'Comprobantes',
        disabled: true,
        to: '/cuentas/comprobantes'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-ABONOS',
        icon: 'mdi-credit-card-wireless',
        title: 'Abonos',
        disabled: true,
        to: '/cuentas/abonos'
      },
      {
        clase: 'CUENTAS',
        ref: 'CUE-DOCUMENTOS-REPORTE',
        icon: 'mdi-printer',
        title: 'Documentos',
        disabled: true,
        to: '/cuentas/reporte'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-PRODUCTOS',
        icon: 'mdi-package',
        title: 'Productos',
        disabled: true,
        to: '/almacenes/productos'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-AJUSTES',
        icon: 'mdi-package-check',
        title: 'Ajustes',
        disabled: true,
        to: '/almacenes/ajustes'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-DOCUMENTOS',
        icon: 'mdi-file-document',
        title: 'Documentos',
        disabled: true,
        to: '/almacenes/documentos'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-RECEPCION',
        icon: 'mdi-package-down',
        title: 'Recepción',
        disabled: false,
        to: '/almacenes/recepciones'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-CATALOGO',
        icon: 'mdi-camera-burst',
        title: 'Catalogo',
        disabled: true,
        to: '/almacenes/catalogo'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-DESPACHOS',
        icon: 'mdi-package-up',
        title: 'Despachos',
        disabled: true,
        to: '/almacenes/despachos'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-CONTEO',
        icon: 'mdi-clipboard-edit',
        title: 'Conteo',
        disabled: true,
        to: '/almacenes/conteo'
      },
      {
        clase: 'INVENTARIOS',
        ref: 'INV-PRODUCTOS-REPORTE',
        icon: 'mdi-printer',
        title: 'Productos',
        disabled: true,
        to: '/almacenes/reporte'
      }
    ]
    const aliado = 'Dinamic ASP, s.a.'
    const usuario = 'jForti'

    return {
      escritorioElementos,
      aliado,
      usuario,
    }
  }
}
</script>

<template>
  <v-app full-height xstyle="background-color: #cfd8dc" class="text-outlined">
    <v-container fluid>
      <v-main>
        <v-row>
          <v-col cols="2">
            <gaveta :e="escritorioElementos" :a="aliado" :u="usuario" />
          </v-col>

          <!-- Escritorio -->
          <v-col cols="10">
            <escritorio :e="escritorioElementos" />
          </v-col>
        </v-row>
      </v-main>

      <v-footer app class="bg-grey-lighten-3">
        <v-spacer></v-spacer>
        <div class="text-overline text-grey">
          <span class="text-h6 text-red">𝛂</span>
          .{{ 2024 }}
        </div>
        <v-spacer></v-spacer>
      </v-footer>
    </v-container>
  </v-app>
</template>

<style scoped></style>

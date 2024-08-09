<template>
  <f7-page>
    <f7-navbar title="Ruta Dinámica" back-link="Back"></f7-navbar>
    <f7-block strong inset>
      <ul>
        <li><b>Url:</b> {{ f7route.url }}</li>
        <li><b>Path:</b> {{ f7route.path }}</li>
        <li><b>Hash:</b> {{ f7route.hash }}</li>
        <li>
          <b>Parámetros:</b>
          <ul>
            <li v-for="(value, key) in f7route.params" :key="key">
              <b>{{ key }}:</b> {{ value }}
            </li>
          </ul>
        </li>
        <li>
          <b>Query:</b>
          <ul>
            <li v-for="(value, key) in f7route.query" :key="key">
              <b>{{ key }}:</b> {{ value }}
            </li>
          </ul>
        </li>
        <li><b>Ruta:</b> {{ f7route.route.path }}</li>
      </ul>
    </f7-block>
    <f7-block strong inset>
      <f7-link @click="f7router.back()">Regresar a través de la API del enrutador</f7-link>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  props: {
    f7route: Object,
    f7router: Object,
  },
};
</script>

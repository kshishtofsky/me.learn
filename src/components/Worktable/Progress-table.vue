<template lang="pug">
.progress-table
  .progress-table_inner
    .title
      h2 Общая успеваемость
    .progress
      table
        tr(class="table-title")
          td(class="tb-left") Курс
          td 5
          td 4
          td 3
          td 2
          td НБ
        tr
          td(class="tb-left-course tb-left") Английский
          td 125
          td 35
          td 16
          td 8
          td 29
</template>

<script>

</script>

<style lang="scss" scoped>
@import '../../assets/mixins';

.tb-left {
  text-align: left;
}
.tb-left-course {
  padding-left: 32px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    width: 16px;
    height: 32px;
    border-radius: 24px;
    background: linear-gradient(104.04deg, #FF9A9E -0.04%, #FAD0C4 98.96%, #FAD0C4 99.96%);
    box-shadow: 0px 4px 24px rgba(253, 181, 177, 0.5);
  }
}

tr:last-child {
  td {
    border-bottom: none;
  }
}

td {
  padding-bottom: 8px;
  border-bottom: 2px solid #F5F5F5;
}

.progress-table {
  width: 612px;
}
.progress {
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  table {
    width: 100%;
    text-align: center;
    td {
      padding-top: 16px;
    }
  }
  .table-title {
    font-weight: 5s 00;
  }
}
</style>

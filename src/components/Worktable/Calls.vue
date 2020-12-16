<template lang="pug">
.calls
  .calls_inner
    .title
      h2 Звонки
    .calls-list
      .calls-item
        .title-calls
          h2 Понедельник, среда-суббота
        .calls-item-list
          table
            tr
              td 1.
              td 8:30 - 10:00
            tr
              td 2.
              td 10:10 - 11:40
          table
            tr
              td Обед
              td 12.00 – 12.45
          table
            tr
              td 3.
              td 12:25 - 13:55
            tr
              td 4.
              td 14:05 - 15:35
            tr
              td 5.
              td 15:45 - 17:15
            tr
              td 6.
              td 17.25 – 18.55
            tr
              td 7.
              td 19.05 - 20.35
      .calls-item
        .title-calls
          h2 Вторник
        .calls-item-list
          table
            tr
              td Классный час
              td 8.30 – 9.00
          table
            tr
              td 1.
              td 9.10 – 10.30
            tr
              td 2.
              td 10.40 – 12.00
          table
            tr
              td Обед
              td 12.00 – 12.45
          table
            tr
              td 3.
              td 12.45 – 14.05
            tr
              td 4.
              td 14.15 – 15.35
            tr
              td 5.
              td 15.45 – 17.05
            tr
              td 6.
              td 17.15 – 18.35
            tr
              td 7.
              td 18.45 - 20.05
      .calls-item
        .title-calls
          h2 Пары по часу
        .calls-item-list
          table
            tr
              td 1.
              td 8.30 – 9.30
            tr
              td 2.
              td 9.40 – 10.40
            tr
              td 3.
              td 10.50 – 11.50
            tr
              td 4.
              td 12.00 – 13.00
            tr
              td 5.
              td 13.10 – 14.10
            tr
              td 6.
              td 14.20 – 15.20
            tr
              td 7.
              td  15.30 - 16.30
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/mixins';

.calls-list {
  @include flex(start, space-between);
  .title-calls {
    margin-top: 16px;
    h2 {
      font-size: 18px;
    }
  }
}
.calls-item-list {
  margin-top: 8px;
  font-family: 'Montserrat', serif;
  font-size: 18px;
  td {
    padding-bottom: 16px;
    padding-right: 16px;
  }
}
</style>

<template lang="pug">
.homework
  .homework_inner
    .homework-title
      p Домашняя работа
      hr
    .homework-list
      .homework-item
        .homework-top
          p Конспект §2 - Политика В.В. Путина
        .homework-btm
          p Осталось дней: 6
          p История
      .homework-item
        .homework-top
          p Конспект §2 - Политика В.В. Путина
        .homework-btm
          p Осталось дней: 6
          p История
</template>

<script>

</script>

<style lang="scss" scoped>
@import '../../assets/mixins';

.homework {
  width: 608px;
  height: 593px;
  background-color: #000;
  border-radius: 24px;
  margin-top: 32px;
}
.homework_inner {
  padding: 12px 16px;
  .homework-title {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-family: 'Roboto Slab', serif;
    font-weight: 500;
    font-size: 24px;
    hr {
      margin-top: 16px;
      margin-right: 0;
      margin-left: 0;
      width: 56%;
      background-color: #fff;
      height: 4px;
    }
  }
  .homework-list {
    margin-top: 24px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }
  .homework-item {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 128px;
    background-color: #fff;
    border-radius: 8px;
    padding: 2px 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: .4s ease-in-out;
    cursor: pointer;
    .homework-top {
      font-size: 24px;
      font-weight: 700;
    }
    .homework-btm {
      @include flex(center, space-between);
      p:last-child {
        font-weight: 700;
      }
    }
    &:hover {
      box-shadow: 0 4px 24px rgba(255, 255, 255, 0.25);
    }
  }
}
</style>

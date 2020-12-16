<template lang="pug">
.courses
    .courses_inner
      .title
        h2 Мои курсы
        h5 2 курс
      .course-list
        router-link(v-for="course in courses" :key="course.id" :to="course.coursePath")
          .course-item(:class="course.courseBg")
            .course-item-top
              .suptitle
                p {{course.courseSuptitle}}
              .course-item-icon
                img(:src="'./img/course-icons/' + course.courseImg")
            .course-item-btm
              p {{course.courseName}}
</template>

<script>
export default {
  data () {
    return {
      courses: [
        {
          id: 1,
          courseName: 'Английский',
          coursePath: 'english',
          courseSuptitle: '-Hi, Mo! How are you?' +
                          '-Hi, Alice, so-so...',
          courseImg: 'english_icon.png',
          courseBg: 'PINK-GRAD'
        },
        {
          id: 2,
          courseName: 'ИТ',
          coursePath: 'info_tech',
          courseSuptitle: 'Информационные\n' +
                          'Технологии',
          courseImg: 'info_tech_icon.png',
          courseBg: 'THREE-GRAD'
        },
        {
          id: 3,
          courseName: 'ОАП',
          coursePath: 'oap',
          courseSuptitle: 'Основы Алгоритмизации\n' +
                          'и Программирования',
          courseImg: 'english_icon.png',
          courseBg: 'BLUE-GRAD'
        },
        {
          id: 4,
          courseName: 'МДК 08.02',
          coursePath: 'graphicdesign',
          courseSuptitle: 'Графический\n' +
                          'дизайн и мультимедиа',
          courseImg: 'english_icon.png',
          courseBg: 'PURPLE-GRAD'
        },
        {
          id: 5,
          courseName: 'ЭВМ',
          coursePath: 'elementsofmath',
          courseSuptitle: 'Элементы Высшей \n Математики',
          courseImg: 'english_icon.png',
          courseBg: 'PURPLE-GRAD-TWO'
        },
        {
          id: 6,
          courseName: 'ОСиС',
          coursePath: 'operationsystem',
          courseSuptitle: 'Операционные \n' +
                          'Системы и Среды',
          courseImg: 'english_icon.png',
          courseBg: 'GREEN-GRAD'
        },
        {
          id: 7,
          courseName: 'Физ-ра',
          coursePath: 'phys_culture',
          courseSuptitle: 'Физическая\n' +
                          'Культура',
          courseImg: 'english_icon.png',
          courseBg: 'RED-GRAD'
        },
        {
          id: 8,
          courseName: 'ДМ',
          coursePath: 'dm',
          courseSuptitle: 'Дискретная Математика',
          courseImg: 'english_icon.png',
          courseBg: 'LIGHT-GRAD'
        },
        {
          id: 9,
          courseName: 'ЭТ',
          coursePath: 'baseofelectronics',
          courseSuptitle: 'Основы \n' +
                          'Электротехники',
          courseImg: 'english_icon.png',
          courseBg: 'DARK-GREEN-GRAD'
        },
        {
          id: 10,
          courseName: 'ААС',
          coursePath: 'aac',
          courseSuptitle: 'Архитектура Аппаратных' +
                          'Средств',
          courseImg: 'english_icon.png',
          courseBg: 'GRAY-GRAD'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/mixins';
@import "../../assets/vars";

.course-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
  margin-top: 8px;
  .course-item {
    width: 100%;
    height: 144px;
    padding: 12px 16px;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: 'Montserrat', sans-serif;
    margin-top: 16px;
    cursor: pointer;
    transition: .4s ease-in-out;
    .course-item-top {
      @include flex(start, space-between);
      .suptitle {
        font-size: 16px;
        font-weight: 40;
        color: #fff;
        display: flex;
        flex-direction: column;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
    .course-item-btm {
      font-size: 36px;
      font-weight: 700;
    }
  }
}
</style>

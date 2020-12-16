<template lang="pug">
.course-page
  .course-page-title.PINK-GRAD
    .container
      h1 Английский
        img(src="../../../../public/img/course-icons/english_icon.png")
      p Регер Марина Андреевна
  .course-page-content.container
    .helpful-resourses
      .title(@click="hide")
        h2 Полезные ресурсы
        .arrow-hide
          <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="26" y="12.9434" width="5.28998" height="17.6333" rx="2.64499" transform="rotate(135 26 12.9434)" fill="#4794FF"/>
            <rect x="4.44556" y="16.3259" width="5.28998" height="17.6333" rx="2.64499" transform="rotate(-135 4.44556 16.3259)" fill="#4794FF"/>
          </svg>
      transition(name="hide")
        .help-res_content(v-show="helpRes")
          .links
            a(href="#") ссылка
            a(href="#") ссылка
          .files
            .file
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.64 8.34286L15.24 0.342857C15 0.114286 14.76 0 14.4 0H2.4C1.08 0 0 1.02857 0 2.28571V29.7143C0 30.9714 1.08 32 2.4 32H21.6C22.92 32 24 30.9714 24 29.7143V9.14286C24 8.8 23.88 8.57143 23.64 8.34286ZM14.4 2.74286L21.12 9.14286H14.4V2.74286ZM21.6 29.7143H2.4V2.28571H12V9.14286C12 10.4 13.08 11.4286 14.4 11.4286H21.6V29.7143Z" fill="#FF4747"/>
                <path d="M6 23C6 22.4477 6.44772 22 7 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H7C6.44772 24 6 23.5523 6 23Z" fill="#FF4747"/>
                <path d="M6 17C6 16.4477 6.44772 16 7 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17Z" fill="#FF4747"/>
              </svg>
              .filename
                .filetype
                  p .pdf
                p Какая-нибудь книга
            .file
              <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.64 8.34286L15.24 0.342857C15 0.114286 14.76 0 14.4 0H2.4C1.08 0 0 1.02857 0 2.28571V29.7143C0 30.9714 1.08 32 2.4 32H21.6C22.92 32 24 30.9714 24 29.7143V9.14286C24 8.8 23.88 8.57143 23.64 8.34286ZM14.4 2.74286L21.12 9.14286H14.4V2.74286ZM21.6 29.7143H2.4V2.28571H12V9.14286C12 10.4 13.08 11.4286 14.4 11.4286H21.6V29.7143Z" fill="#FF4747"/>
              <path d="M6 23C6 22.4477 6.44772 22 7 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H7C6.44772 24 6 23.5523 6 23Z" fill="#FF4747"/>
              <path d="M6 17C6 16.4477 6.44772 16 7 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17Z" fill="#FF4747"/>
              </svg>
              .filename
                .filetype
                  p .pdf
                p Какая-нибудь книга
    transition(name="hide")
      .themes
        .title(@click="hide")
          h2 Темы
          <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="26" y="12.9434" width="5.28998" height="17.6333" rx="2.64499" transform="rotate(135 26 12.9434)" fill="#4794FF"/>
            <rect x="4.44556" y="16.3259" width="5.28998" height="17.6333" rx="2.64499" transform="rotate(-135 4.44556 16.3259)" fill="#4794FF"/>
          </svg>
        .theme
          .theme-title
            h3(class="title-suptitle suptitle") Тема
            h3 Страдательный залог (Passive Voice)
          .theme-desc
            h4(class="suptitle") Описание
            p Пассивный залог в английском языке (Passive Voice) образуется при помощи вспомогательного глагола to be в соответствующем времени и Participle II смыслового глагола(или третьей формы смыслового глагола).
          .theme-resourses
            .files
              h3(class="suptitle") Прикрепленные файлы
              .files_inner
                .file
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.64 8.34286L15.24 0.342857C15 0.114286 14.76 0 14.4 0H2.4C1.08 0 0 1.02857 0 2.28571V29.7143C0 30.9714 1.08 32 2.4 32H21.6C22.92 32 24 30.9714 24 29.7143V9.14286C24 8.8 23.88 8.57143 23.64 8.34286ZM14.4 2.74286L21.12 9.14286H14.4V2.74286ZM21.6 29.7143H2.4V2.28571H12V9.14286C12 10.4 13.08 11.4286 14.4 11.4286H21.6V29.7143Z" fill="#4794FF"/>
                    <path d="M6 23C6 22.4477 6.44772 22 7 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H7C6.44772 24 6 23.5523 6 23Z" fill="#4794FF"/>
                    <path d="M6 17C6 16.4477 6.44772 16 7 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17Z" fill="#4794FF"/>
                  </svg>
                  .filename
                    .filetype
                      p .doc
                    p Какая-нибудь книга
                .file
                  <svg width="24" height="32" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.64 8.34286L15.24 0.342857C15 0.114286 14.76 0 14.4 0H2.4C1.08 0 0 1.02857 0 2.28571V29.7143C0 30.9714 1.08 32 2.4 32H21.6C22.92 32 24 30.9714 24 29.7143V9.14286C24 8.8 23.88 8.57143 23.64 8.34286ZM14.4 2.74286L21.12 9.14286H14.4V2.74286ZM21.6 29.7143H2.4V2.28571H12V9.14286C12 10.4 13.08 11.4286 14.4 11.4286H21.6V29.7143Z" fill="#4794FF"/>
                  <path d="M6 23C6 22.4477 6.44772 22 7 22H17C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H7C6.44772 24 6 23.5523 6 23Z" fill="#4794FF"/>
                  <path d="M6 17C6 16.4477 6.44772 16 7 16H17C17.5523 16 18 16.4477 18 17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17Z" fill="#4794FF"/>
                  </svg>
                  .filename
                    .filetype
                      p .doc
                    p Какая-нибудь книга
            .links
              h3(class="suptitle") Ссылки
              a(href="#") ссылка
              a(href="#") ссылка
    .homework
      .title(@click="hide")
        h2 Задания
        <svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="12.9434" width="5.28998" height="17.6333" rx="2.64499" transform="rotate(135 26 12.9434)" fill="#4794FF"/>
          <rect x="4.44556" y="16.3259" width="5.28998" height="17.6333" rx="2.64499" transform="rotate(-135 4.44556 16.3259)" fill="#4794FF"/>
        </svg>

</template>

<script>
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'

export default {
  data () {
    return {
      helpRes: true
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    hide(event) {
      const arrow = $('.arrow-hide');
      if (arrow.hasClass('rotate')) {
        arrow.removeClass('rotate')
      } else {
        arrow.addClass('rotate');
      }
      this.helpRes = !this.helpRes;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/vars";
@import "../../../assets/mixins";

.hide-leave-active,
.hide-enter-active {
  transition: .4s ease-in-out;
}
.hide-leave-active,
.hide-enter {
  transform: translateX(-500px);
}

.arrow-hide {
  transition: .2s ease-in-out;
}
.rotate {
  transform: rotate(180deg);
}
.course-page {
  .course-page-title {
    font-family: 'Montserrat', sans-serif;
    .container {
      @include flex(center, space-between);
    }
    width: 100%;
    height: 64px;
    color: #fff;
    h1 {
      font-size: 48px;
      font-weight: 700;
      img {
        margin-left: 16px;
      }
    }
    p {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .course-page-content {
    .title {
      max-width: 320px;
      display: flex;
      align-items: center;
      cursor: pointer;
      svg {
        margin-top: 6px;
      }
      h2 {
        font-size: 28px;
        font-weight: 700;
      }
    }
    .links {
      margin-top: 16px;
      a {
        font-size: 18px;
        font-weight: 700;
        margin-right: 24px;
        color: $BLUE;
      }
    }
    .files {
      display: flex;
    }
    .file {
      margin-top: 16px;
      margin-left: 32px;
      &:first-child {
        margin-left: 0;
      }
      display: flex;
      svg {
        cursor: pointer;
      }
      .filename {
        cursor: pointer;
        .filetype {
          font-size: 12px;
          font-weight: 400;
        }
        margin-left: 16px;
        font-size: 16px;
        font-weight: 500;
      }
    }
    .theme {
      margin-top: 16px;
      background-color: #fff;
      border-radius: 24px;
      padding: 16px 16px;
      .suptitle {
        color: #D5D5D5;
        font-weight: 400;
      }
      .theme-title {
        margin-bottom: 16px;
        font-size: 18px;
      }
      .theme-desc {
        margin-bottom: 16px;
      }
      .files {
        display: block;
        .files_inner {
          display: flex;
        }
        .file {
          max-width: 320px;
          margin: 0;
          margin-top: 12px;
          margin-right: 64px;
        }
      }
      .theme-resourses {
        display: flex;
        .links {
          margin: 0;
          h3 {
            margin-bottom: 16px;
          }
        }
      }
    }
  }
}
</style>

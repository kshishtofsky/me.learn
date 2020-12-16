<template lang="pug">
.header
  .container
    .header_inner
      .logo
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clip-path="url(#clip0)">
            <circle cx="20.0225" cy="20" r="17.5" stroke="black" stroke-width="5"/>
            <path d="M29.7268 14.7883L33.5039 17.2399C33.6792 17.3537 33.7893 17.5158 33.834 17.726C33.8787 17.9363 33.8442 18.129 33.7304 18.3043L23.7065 33.7473C23.5927 33.9226 23.4307 34.0327 23.2204 34.0774C23.0102 34.1221 22.8174 34.0876 22.6421 33.9738L18.3152 31.1653C18.1399 31.0515 18.0299 30.8895 17.9851 30.6792C17.9404 30.469 17.9749 30.2762 18.0887 30.1009L22.3403 23.5507L19.0867 25.1084C18.5731 25.3413 18.149 25.3492 17.8143 25.1319L16.1409 24.0458C15.8062 23.8285 15.6407 23.4379 15.6443 22.874L15.7424 19.2681L11.4908 25.8182C11.377 25.9935 11.2149 26.1035 11.0047 26.1483C10.7944 26.193 10.6017 26.1585 10.4264 26.0447L6.09945 23.2361C5.92414 23.1223 5.81412 22.9603 5.76938 22.7501C5.72464 22.5398 5.75916 22.347 5.87295 22.1717L15.8969 6.72874C16.0107 6.55343 16.1727 6.44341 16.3829 6.39867C16.5932 6.35393 16.786 6.38845 16.9613 6.50224L20.7384 8.95391C21.1846 9.24356 21.3876 9.68112 21.3473 10.2666L21.0896 18.2539L28.28 14.7665C28.7983 14.4914 29.2806 14.4986 29.7268 14.7883Z" fill="black"/>
          </g>
          <defs>
            <clipPath id="clip0">
            <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        p me.learn
      nav
        router-link(to="/worktable" class="active-link") Рабочий стол
        router-link(to="#") Главная
        router-link(to="#") Карта студента
      .header-right
        .notify
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="black"/>
          </svg>
        .messages
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9.403 16.026L10.043 15.916C10.167 15.894 10.315 15.862 10.486 15.818C12.6 15.288 14 13.708 14 12C14 9.865 11.824 8 9 8C6.176 8 4 9.865 4 12C4 13.218 4.702 14.378 5.931 15.15L5.967 15.17L7 15.74V18.503L9.403 16.026ZM10.385 17.886L6.718 21.666C6.57942 21.809 6.40132 21.9073 6.20651 21.9484C6.0117 21.9895 5.80905 21.9715 5.62452 21.8968C5.43999 21.822 5.28197 21.6939 5.17071 21.5288C5.05945 21.3637 5.00001 21.1691 5 20.97V16.92C4.95533 16.8959 4.91131 16.8705 4.868 16.844C3.129 15.752 2 13.989 2 12C2 8.686 5.134 6 9 6C12.866 6 16 8.686 16 12C16 14.726 13.879 17.028 10.974 17.758C10.7793 17.8079 10.5828 17.8506 10.385 17.886V17.886ZM8.936 5C10.146 3.207 12.41 2 15 2C18.866 2 22 4.686 22 8C22 9.989 20.87 11.752 19.132 12.844C19.0887 12.8705 19.0447 12.8959 19 12.92V16.97C19 17.1691 18.9405 17.3637 18.8293 17.5288C18.718 17.6939 18.56 17.822 18.3755 17.8968C18.1909 17.9715 17.9883 17.9895 17.7935 17.9484C17.5987 17.9073 17.4206 17.809 17.282 17.666L15.547 15.878L16.59 14.08L17 14.503V11.74L18.033 11.17L18.069 11.15C19.299 10.378 20 9.218 20 8C20 5.865 17.824 4 15 4C13.72 4 12.574 4.383 11.703 5H8.936Z" fill="black"/>
          </svg>
        .profile
          img(src="../../public/img/avatar.jpg")
</template>

<style lang="scss" scoped>
@import "../assets/mixins";
@import "../assets/vars";

.header {
  background-color: #fff;
  height: 72px;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
}
.header_inner {
  height: 72px;
  @include flex(center, space-between);
  .logo {
    width: 160px;
    @include flex(center, start);
    p {
      font-family: 'Roboto Slab', serif;
      font-weight: 900;
      font-size: 24px;
      margin-left: 16px;
    }
  }
  nav {
    width: 400px;
    font-weight: 400;
    font-size: 18px;
    a {
      margin-right: 24px;
      transition: .4s ease-in-out;
      &:last-child {
        margin-right: 0;
      }
      &:hover {
        color: $BLUE;
      }
    }
    .active-link {
      color: #fff;
      background-color: $BLUE;
      padding: 0 4px;
      &:hover {
        color: #fff;
      }
    }
  }
  .header-right {
    @include flex(center, start);
    svg {
      cursor: pointer;
      margin-right: 24px;
    }
    .profile {
      img {
        cursor: pointer;
        border-radius: 12px;
      }
    }
  }
}
</style>

<template>
  <header>
    <nuxt-link to="/">
      <img :src="frameLogo" alt="프레임로고" />
    </nuxt-link>
    <ul>
      <li>
        <nuxt-link to="/write-notice">공지쓰기</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/writer-list">작가신청목록</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/report-list">신고목록</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/chatting">채팅</nuxt-link>
      </li>
      <li class="logout" @click="onLogout">
        <span>로그아웃</span>
      </li>
    </ul>
  </header>
</template>

<script>
import Cookies from 'js-cookie';
import { frameLogo } from '~/assets/images';

export default {
  name: 'AdminHeader',
  data() {
    return {
      frameLogo,
    };
  },
  methods: {
    onLogout() {
      Cookies.remove('authentication');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
$font-color-active: #0f4c81;
$font-color: #87a6c0;
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  box-sizing: border-box;

  > a {
    height: 4.375rem;
  }

  @media screen and(max-width:187px) {
    flex-direction: column;
    align-items: center;

    > ul {
      margin: 0;
      margin-top: 1rem;
    }
  }
}

a {
  display: block;
  text-decoration: none;
  text-align: center;
}

img {
  width: 4.75rem;
  height: auto;
  object-fit: contain;
}

ul {
  display: flex;
  justify-content: space-between;
  margin-left: 1.875rem;

  @media screen and(max-width:363px) {
    flex-direction: column;
    align-items: center;
  }
}

li {
  list-style: none;

  & + & {
    margin-left: 1.75rem;

    @media screen and(max-width:363px) {
      margin-left: 0;
      margin-top: 0.25rem;
    }
  }

  > a {
    font-size: 1.25rem;
    font-family: 'AppleSDGothicNeo';
    color: #87a6c0;
    transition: 0.3s;

    &::after {
      content: '';
      width: 0%;
      left: 50%;
      height: 1px;
      display: block;
      position: relative;
      margin-top: 1px;
      border-bottom: 2px solid $font-color;
      transition: all 0.3s ease;
    }

    &.nuxt-link-active {
      color: $font-color-active;

      &::after {
        content: '';
        width: 100%;
        left: 0;
        height: 1px;
        display: block;
        position: relative;
        margin-top: 1px;
        border-bottom: 2px solid $font-color-active;
        transition: all 0.3s ease;
      }
    }
  }

  &:hover {
    > a {
      color: $font-color-active;

      &::after {
        content: '';
        width: 100%;
        left: 0px;
        height: 1px;
        display: block;
        position: relative;
        margin-top: 1px;
        border-bottom: 2px solid $font-color-active;
        transition: all 0.3s ease;
      }
    }
  }
}

.logout {
  > span {
    display: block;
    text-align: center;
    font-size: 1.25rem;
    font-family: 'AppleSDGothicNeo';
    color: $font-color;
    cursor: pointer;
    transition: 0.3s;

    &::after {
      content: '';
      width: 0%;
      left: 50%;
      height: 1px;
      display: block;
      position: relative;
      margin-top: 1px;
      border-bottom: 2px solid $font-color;
      transition: all 0.3s ease;
    }
  }

  &:hover {
    > span {
      color: $font-color-active;

      &::after {
        content: '';
        width: 100%;
        left: 0px;
        height: 1px;
        display: block;
        position: relative;
        margin-top: 1px;
        border-bottom: 2px solid $font-color-active;
        transition: all 0.3s ease;
      }
    }
  }
}
</style>

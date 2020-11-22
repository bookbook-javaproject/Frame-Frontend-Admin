<template>
  <main>
    <img :src="frameLogo" alt="프레임로고" />
    <h1>LOGIN</h1>
    <input v-model="id" type="id" placeholder="ID" />
    <input
      v-model="password"
      class="second-input"
      type="password"
      placeholder="PASSWORD"
      @keydown.enter="onSubmitLogin"
    />
    <button :style="buttonStyle" @click="onSubmitLogin">로그인</button>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { frameLogo } from '~/assets/images';
import { loginAction } from '~/store/auth/actions';

export default {
  name: 'AdminLogin',
  data() {
    return {
      frameLogo,
      id: '',
      password: '',
    };
  },
  computed: {
    ...mapState({
      auth: state => state.auth,
    }),
    isEmptyInputs() {
      return !this.id.trim() || !this.password.trim();
    },
    buttonStyle() {
      if (!this.isEmptyInputs) {
        return {
          backgroundColor: '#0f4c81',
          cursor: 'pointer',
        };
      }
    },
  },
  watch: {
    auth: {
      deep: true,
      handler(value) {
        if (value.isLoggedIn) {
          this.$router.push('/');
        }
      },
    },
  },
  methods: {
    ...mapActions({
      login: loginAction(),
    }),
    onSubmitLogin() {
      if (!this.isEmptyInputs) {
        this.login({
          id: this.id.trim(),
          password: this.password.trim(),
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$font-color: #0f4c81;

main {
  padding-top: 30px;
  width: 460px;
  height: 530px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 460px) {
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }

  @media screen and (max-height: 660px) {
    top: 50%;
    height: 100%;
    > h1 {
      margin: 10px 0 10px;
    }
  }

  @media screen and (max-height: 470px) {
    > input.second-input {
      margin-top: 10px;
    }

    > button {
      margin-top: 20px;
    }
  }
}

img {
  width: 3.625rem;
  height: auto;
  object-fit: contain;
}

h1 {
  font-family: 'AppleSDGothicNeo';
  font-size: 3.75rem;
  color: $font-color;
  letter-spacing: 0.5rem;
  word-break: break-all;
  text-align: center;
  width: 100%;
  margin: 70px 0 60px;
}

input {
  width: 100%;
  height: 2.7rem;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #b8b8b8;
  outline: none;
  padding-top: 0.5rem;
  border-radius: 0;
  color: #717171;
  font-size: 1.25rem;
  font-family: 'Nanum Gothic';

  &::placeholder {
    color: #d1d1d1;
    font-family: 'Nanum Gothic';
  }

  & + & {
    margin-top: 50px;
  }
}

button {
  width: 100%;
  height: 3.4375rem;
  background-color: #b6c9d9;
  border-radius: 0.25rem;
  box-sizing: border-box;
  border: none;
  color: #ffffff;
  outline: none;
  cursor: not-allowed;
  font-size: 1.5625rem;
  font-family: 'AppleSDGothicNeo';
  margin-top: 71px;
  transition: 0.3s;
}
</style>

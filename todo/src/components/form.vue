<template>
  <router-link to="/test">テストページ</router-link>
  <div class="form">
    <h2>v-modelの練習</h2>
    <div id="app">
      <!-- 名前フォーム -->
      <div class="form-name">
        <p>名前</p>
        <!-- エラーメッセージを追加 -->
        <p class="error-name">5文字以上で入力してください</p>
        <input
          type="text"
          name="name"
          placeholder="名前を入力してください"
          v-model="name"
        />
      </div>
      <!-- 電話番号フォーム -->
      <div class="form-phone">
        <p>電話番号</p>
        <!-- エラーメッセージを追加 -->
        <p class="error-phone">8文字以上で入力してください</p>
        <input
          type="text"
          name="phone"
          placeholder="電話番号を入力してください"
          v-model="phone"
        />
      </div>
      <!-- Eメールアドレス -->
      <div class="form-email">
        <p>Eメール</p>
        <!-- エラーメッセージを追加 -->
        <p class="error-email">メールアドレスの形式で入力してください</p>
        <input
          type="text"
          name="email"
          placeholder="Emailを入力してください"
          v-model="email"
        />
      </div>
    </div>
    <div class="form-button">
      <button disabled>送信する</button>
    </div>
  </div>
</template>

<style>
.form {
  text-align: center;
}

.form-name,
.form-phone,
.form-email {
  width: 80%;
  margin: 0 auto;
  padding: 15px 0;
  margin-bottom: 30px;
  background-color: whitesmoke;
}

input {
  padding: 5px 10px;
  min-width: 250px;
}

.error-name,
.error-phone,
.error-email {
  color: red;
  font-weight: bold;
  text-align: center;
}

form-button .button {
  width: 80%;
  background-color: teal;
  color: white;
  padding: 20px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 50px;
}
</style>

<script></script>

<template>
 <div class="box">
    <div class="field is-grouped">
      <h1 class="subtitle">First DApp  </h1>  
    </div>
    <div class="field is-grouped">
        <p class="control">
            <a class="button is-info" @click="setter">
                setMessage
            </a>
        </p>
        <p class="control is-expanded">
            <input class="input" type="text" placeholder="string _str" v-model="message">
        </p>
    </div>
    <div class="field is-grouped">
        <p class="control">
            <a class="button is-info" @click="getter">
                getMessage
            </a>
        </p>
        <p v-if="isFetched"> 
            {{ fetchedMessage }}
        </p>
    </div>
  </div>
</template>

<script>
import './../node_modules/bulma/css/bulma.css';
import { setMessage, getMessage } from './helloworld.js'

export default {
    data() {
      return {
        message: '',
        fetchedMessage: '',
        isFetched: false,
      }
    },
    methods: {
      setter() {
        if(this.message.length > 0) {
          setMessage(this.message)
          this.message = '';
        } 
      },
      getter() {
        this.isFetched = false;
        getMessage().then(str => {
          this.fetchedMessage = '0: string: ' + str;
          this.isFetched = true;
        })
      }
    },
  }
</script>

<style>

</style>
<template>
  <q-page class="layout-padding justify-center items-center" style="width: 500px">
    <q-card color="grey-3" text-color="dark">
      <q-card-main>
        <div class="row gutter-md">
          <div class="col-6">
            {{itl18n[$store.getters['user/getLanguage']].operationLabel}}: &nbsp;
            <q-select
              v-model="config.operation"
              :options="listOperation"
            />
          </div>
          <div class="col-6">
            {{itl18n[$store.getters['user/getLanguage']].maxNumberName}}: &nbsp;
            <div class="full-width">
              <q-slider
                v-model="config.maxNumber"
                label-always
                :min="10"
                :max="100"
                :step="10"
                label
                snap
              />
            </div>
          </div>
        </div>
      </q-card-main>
    </q-card>
    <br/>
    <q-card color="grey-4" text-color="dark">
      <q-card-main style="font-size: 28px; text-align: center;">
        {{firstNumber}} {{config.operation}} {{secondNumber}}
        <q-input
          :float-label="itl18n[this.$store.getters['user/getLanguage']].resultName"
          v-model="result"
          type="number"
          :placeholder="itl18n[this.$store.getters['user/getLanguage']].resultPlaceholder"
          @keyup.enter="validateOperation()"
        /> <br/>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
import listOperation from 'assets/listOperation'
import itl18n from 'assets/itl18n'
export default {
  name: 'Home',
  created () {
    this.reloadValues()
  },
  data () {
    return {
      firstNumber: 1,
      secondNumber: 2,
      result: null,
      listOperation,
      itl18n,
      config: {
        maxNumber: 10,
        operation: '+'
      }
    }
  },
  methods: {
    reloadValues () {
      this.firstNumber = this.getRandomNumber(this.config.maxNumber)
      this.secondNumber = this.getRandomNumber(this.config.maxNumber)
      this.result = null
    },
    getRandomNumber (maxNumber) {
      return Math.round(Math.random() * maxNumber)
    },
    getCorrectResult (firstNumber, secondNumber, operation) {
      switch (operation) {
        case '+':
          return firstNumber + secondNumber
        case '-':
          return firstNumber - secondNumber
        case '*':
          return firstNumber * secondNumber
        case '/':
          return firstNumber / secondNumber
      }
    },
    validateOperation () {
      if (this.result === this.getCorrectResult(this.firstNumber, this.secondNumber, this.config.operation)) {
        this.$q.notify({message: this.itl18n[this.$store.getters['user/getLanguage']].correctMessage, type: 'positive', position: 'center', timeout: 500})
        this.$store.commit('user/addScore', 1)
      } else {
        this.$q.notify({message: this.itl18n[this.$store.getters['user/getLanguage']].incorrectMessage, type: 'negative', position: 'center', timeout: 500})
        this.$store.commit('user/addScore', -1)
      }
      this.reloadValues()
    }
  }
}
</script>

<script setup lang="ts">
const model = defineModel<string>()
const emojis = [
  ["😀", "😁", "😂", "🤣", "😅"],
  ["😊", "😋", "😎", "😍", "🥰"],
  ["🙄", "😏", "😣", "😥", "😮"],
  ["😜", "😝", "🤤", "😒", "😛"],
  ["🤮", "😭", "😦", "😡", "🤡"]
]
const kaomojis = [
  ["ヾ(≧▽≦*)o", "φ(*￣0￣)", "q(≧▽≦q)"],
  ["(っ °Д °;)っ", "＞︿＜", "≡(▔﹏▔)≡"],
  ["O(∩_∩)O", "(*^▽^*)", "(❁´◡`❁)"],
  ["(＃°Д°)", "(´･ω･`)", "?(→_→)`)"],
  ["◑﹏◐", "(⓿_⓿)", "(●'◡'●)"],
]
const symbols = [
  ["℃", "¥", "£", "℉", "$"],
  ["₦", "☆", "＠", "₧", "₫"],
  ["㎡", "㎡", "㎞", "㎏", "㏕"],
  ["ⅰ", "ⅱ", "ⅲ", "ⅳ", "ⅴ"],
  ["≈", "＝", "≌", "＜", "＞"]
]
const textarea = ref()

function insert(value: string) {
  const location = textarea.value.selectionStart
  textarea.value.focus()
  model.value = model.value?.substring(0, location) + value + model.value?.substring(location)
}

</script>

<template>
  <div class="w-full shadow">
    <div class="bg-inner px-4 py-1 text-holder flex justify-between items-center">
      <div>
        <v-menu location="end center">
          <template #activator="{props}">
            <v-btn v-bind="props" density="compact"
                   icon="i-ic-outline-emoji-emotions" rounded/>
          </template>
          <div class="mx-2 bg-screen p-2 rounded-2 shadow">
            <v-row v-for="emojiLine in emojis" no-gutters>
              <v-col v-for="emoji in emojiLine">
                <v-btn density="compact" color="transparent" icon="" @click="insert(emoji)" rounded flat>
                  {{ emoji }}
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-menu>
        <v-menu location="end center">
          <template #activator="{props}">
            <v-btn v-bind="props" density="compact" icon="" rounded>
              :-)
            </v-btn>
          </template>
          <div class="mx-2 bg-screen p-2 rounded-2 shadow">
            <v-row v-for="kaomojiLine in kaomojis" no-gutters>
              <v-col v-for="kaomoji in kaomojiLine">
                <v-btn width="86" color="transparent" @click="insert(kaomoji)" flat>
                  <span class="text-holder">{{ kaomoji }}</span>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-menu>
        <v-menu location="end center">
          <template #activator="{props}">
            <v-btn v-bind="props" density="compact" icon="" rounded>
              Ω
            </v-btn>
          </template>
          <div class="mx-2 bg-screen p-2 rounded-2 shadow">
            <v-row v-for="symbolLine in symbols" no-gutters>
              <v-col v-for="symbol in symbolLine">
                <v-btn color="transparent" density="comfortable" size="32" @click="insert(symbol)" flat>
                  <span class="text-holder">
                  {{ symbol }}
                  </span>
                </v-btn>
              </v-col>
            </v-row>
          </div>
        </v-menu>
      </div>
      <div>
        <v-btn color="primary" variant="flat">
          提交
        </v-btn>
      </div>
    </div>
    <div class="bg-wrapper">
      <textarea v-model="model" ref="textarea" class="w-full resize-none outline-none p-4 text-holder" rows="4"/>
    </div>
  </div>
</template>
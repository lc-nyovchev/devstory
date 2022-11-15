<template>
  <div>
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<script setup>

useHead({
  title: 'my-test-page',
  script: [{
    children: `(function(a,d,e,b,f,c,s){a[b]=a[b]||function(){a[b].q.push(arguments);};
a[b].q=[];c=d.createElement(e);c.async=1;c.src="//tdn.sta.r42tag.net/lib/"+f+".js";
s=d.getElementsByTagName(e)[0];s.parentNode.insertBefore(c,s);})
(window,document,"script","_st", "1358-v2");
_st("loadTags");`
  }]
})

const count = ref(0)
const increment = () => {
  count.value++
}
</script>
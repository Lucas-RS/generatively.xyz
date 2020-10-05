<template>
  <div class="home">
    <Plate 
      src="https://res.cloudinary.com/demo/image/upload/sample.jpg" 
      title="STROKES OF PAINT ON CANVAS" 
      href="https://google.com"
    />
  </div>
</template>

<script>
import Plate from '@/components/Plate.vue'

export default {
  name: 'Home',
  components: {
    Plate
  }
}
</script>

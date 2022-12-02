<template>
  <div class="container">
    <Card>
      <h4>Add new item</h4>
      <!-- Create new item -->
      <AddItem />
    </Card>
    <Card>
      <h4>Your items ({{ cart.itemsCount }})</h4>
      <ItemsList />
    </Card>
    <Card>
      <h4>Counter: {{ counter.count }}</h4>
      <button
        @click="counter.decrease"
      >
        -
      </button>
      <button
        @click="counter.increase"
      >
        +
      </button>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/Card.vue'
import AddItem from '@/components/AddItem.vue'
import ItemsList from '@/components/ItemsList.vue'
import { useCartStore } from '@/store/cart'
import { useCounterStore } from '@/store/counter'

export default defineComponent({
  components: { Card, AddItem, ItemsList },
  setup() {
    const cart = useCartStore()
    const counter = useCounterStore()
    return { cart, counter }
  }
})
</script>

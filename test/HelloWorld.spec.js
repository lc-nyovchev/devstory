import { mount } from '@vue/test-utils'
import { describe, assert, expect, test } from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('', () => {
    test('asd', () => {
        const wrapper = mount(HelloWorld)
        console.log('pass')
    })
})
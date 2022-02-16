import { mount } from '@vue/test-utils'
import { describe, assert, expect, test } from 'vitest'
import MainLayout from '../src/components/MainLayout.vue'

describe('', () => {
    test('asd', () => {
        const wrapper = mount(MainLayout)
        console.log('pass')
    })
})
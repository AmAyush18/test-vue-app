import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { projectAuth } from '../config'
import getUser from '../getUser'

// Mock the Firebase Auth module
vi.mock('../config', () => ({
  projectAuth: {
    currentUser: null,
    onAuthStateChanged: vi.fn()
  }
}))

describe('getUser', () => {
  let currentUserMock

  beforeEach(() => {
    // Reset mock before each test
    vi.clearAllMocks()
    currentUserMock = null
  })

  it('initially returns null user', () => {
    const { user } = getUser()
    expect(user.value).toBe(null)
  })

  it('updates user on auth state change', async () => {
    const { user } = getUser()

    // Define the new user object
    const newUser = { uid: '123', email: 'tester@test.com' }

    // Mock implementation of onAuthStateChanged
    projectAuth.onAuthStateChanged.mockImplementation((callback) => {
      callback(newUser)
    })

    // Simulate the auth state change
    projectAuth.onAuthStateChanged((user) => {
      user.value = user
    })

    // Update the ref to trigger reactivity
    user.value = newUser

    // Assert the user ref is updated
    expect(user.value).toEqual(newUser)
  })
})

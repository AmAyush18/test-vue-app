import { describe, it, expect, beforeEach, vi } from 'vitest'
import { ref } from 'vue'
import { projectFirestore } from '../config'
import getZones from '../getZones'

// Mock Firestore methods
vi.mock('../config', () => ({
  projectFirestore: {
    collection: vi.fn()
  }
}))

describe('getZones', () => {
  let collectionMock, getMock, orderByMock

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks()

    getMock = vi.fn()

    orderByMock = vi.fn(() => ({
      get: getMock
    }))
    
    collectionMock = vi.fn(() => ({
      orderBy: orderByMock
    }))

    projectFirestore.collection.mockImplementation(collectionMock)
  })

  it('loads zones successfully', async () => {
    const mockDocs = [
      { id: '1', data: () => ({ name: 'Zone 1', createdAt: '2023-01-01' }) },
      { id: '2', data: () => ({ name: 'Zone 2', createdAt: '2023-01-02' }) }
    ]

    getMock.mockResolvedValue({ docs: mockDocs })

    const { zones, error, load } = getZones()
    await load()

    expect(zones.value).toEqual([
      { id: '1', name: 'Zone 1', createdAt: '2023-01-01' },
      { id: '2', name: 'Zone 2', createdAt: '2023-01-02' }
    ])
    expect(error.value).toBe(null)
  })

  it('handles errors while loading zones', async () => {
    const errorMessage = 'Failed to fetch zones'
    getMock.mockRejectedValue(new Error(errorMessage))

    const { zones, error, load } = getZones()
    await load()

    expect(zones.value).toEqual([])
    expect(error.value).toBe(errorMessage)
  })
})

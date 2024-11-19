import { appConfig } from './app.config'

describe('appConfig', () => {
  it('✅ should be defined', () => {
    expect(appConfig).toBeDefined()
  })

  it('📦 should have providers', () => {
    expect(appConfig.providers).toBeTruthy()
  })
})

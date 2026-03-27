import React, { useState } from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { useTranslation } from 'react-i18next'
import ChangeEmail from './ChangeEmail'
import ChangePassword from './ChangePassword'

export default function Settings() {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', mt: 5 }}>

      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
        <Tab label={t('ChangeEmail')} />
        <Tab label={t('ChangePassword')} />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tab === 0 && <ChangeEmail/>}
        {tab === 1 && <ChangePassword/>}
      </Box>

    </Box>
  )
}
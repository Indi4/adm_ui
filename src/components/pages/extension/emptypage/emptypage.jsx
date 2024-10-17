import React from 'react'
import Pageheader from '../../../../layouts/pageheader/pageheader'

export default function Emptypage() {
  const breadcrumbs = ["Pages", "Extension", "Empty"];
  return (
    <div>

      <Pageheader items={breadcrumbs} />


    </div>
  )
}

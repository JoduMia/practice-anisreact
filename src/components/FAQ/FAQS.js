import React from 'react';
import FAQ from './FAQ';
import faqs from './data';
console.log(faqs);

export default function FAQS() {
  return (
    <div>
        {faqs.map(faq => <FAQ key={faq.id} {...faq}/>)}
    </div>
  )
}

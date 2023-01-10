import React from 'react'

const Test = () => {
  return (
    <div>
     <table class="table-auto w-full">
  <thead>
    <tr class="bg-gray-800 text-white">
      <th class="px-4 py-2">Name</th>
      <th class="px-4 py-2">Email</th>
      <th class="px-4 py-2">Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bg-gray-100">
      <td class="px-4 py-2">John Smith</td>
      <td class="px-4 py-2">john@example.com</td>
      <td class="px-4 py-2">(123) 456-7890</td>
    </tr>
    <tr class="bg-gray-200">
      <td class="px-4 py-2">Jane Doe</td>
      <td class="px-4 py-2">jane@example.com</td>
      <td class="px-4 py-2">(987) 654-3210</td>
    </tr>
  </tbody>
</table>

    </div>
  )
}

export default Test

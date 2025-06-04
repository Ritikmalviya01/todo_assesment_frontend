import React from 'react';

function FormDataTable({ submissions }) {
  if (!submissions || submissions.length === 0) return null;

  return (
    <section className="px-4 sm:px-6 lg:px-8 my-12">
      <div className="w-full max-w-[1169px] mx-auto">
        <div className="w-full overflow-x-auto shadow-md rounded-[11.69px]">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left text-sm sm:text-base">Name</th>
                <th className="px-4 py-2 text-left text-sm sm:text-base">Gender</th>
                <th className="px-4 py-2 text-left text-sm sm:text-base">Languages</th>
                <th className="px-4 py-2 text-left text-sm sm:text-base">Email</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub, idx) => (
                <tr
                  key={idx}
                  className="even:bg-gray-50 hover:bg-gray-100 transition-all duration-150"
                >
                  <td className="border-t border-gray-400 px-4 py-2 text-sm">
                    {`${sub.firstName} ${sub.lastName}`}
                  </td>
                  <td className="border-t border-gray-400 px-4 py-2 text-sm">
                    {sub.gender}
                  </td>
                  <td className="border-t border-gray-400 px-4 py-2 text-sm">
                    {sub.languages.filter(Boolean).join(', ')}
                  </td>
                  <td className="border-t border-gray-400 px-4 py-2 text-sm">
                    {sub.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FormDataTable;

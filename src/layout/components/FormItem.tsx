interface FormItemProp {
   labelText: string;
   inputId: string;
   inputType: string;
   inputName: string;
}

export const FormItem = ({ labelText, inputId, inputType, inputName }: FormItemProp) => {
   return (
      <div>
         <main className="flex flex-col gap-3">
            <label htmlFor={inputId} className="text-sky-800">
               {labelText}
            </label>

            {inputType === 'select' ? (
               <select id={inputId} required name={inputName} className="text-black pl-3 border-b border-b-black/[.20] text-lg">
                  <option value="" />

                  <option value="Vila Jelena room" className="room-option">
                     Double room (Vila Jelena)
                  </option>

                  <option value="Vila Jelena apartment" className="apartment-option">
                     Apartment (Vila Jelena)
                  </option>

                  <option value="Vila Marina" className="vila-marina-option">
                     Villa Marina (House)
                  </option>
               </select>
            ) : (
               <input
                  type={inputType}
                  id={inputId}
                  required
                  name={inputName}
                  className="text-black pl-3 border-b border-b-black/[.20] text-lg"
               />
            )}
         </main>
      </div>
   );
};

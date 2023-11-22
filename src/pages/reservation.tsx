import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FormItem } from '../layout/components';

export const ReservationPage = () => {
   interface formDataType {
      [key: string]: FormDataEntryValue;
   }

   const responseBody: formDataType = {};

   const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      formData.forEach((value, property: string) => (responseBody[property] = value));
      console.log(
         `Check in: ${responseBody.checkIn}, Check out: ${responseBody.checkOut}, Guests: ${responseBody.guests}, Accommodation: ${responseBody.accommodation}, Email: ${responseBody.email}, Name: ${responseBody.name}`
      );
   };

   return (
      <section className="relative bg-[url(https://apartmani-jahorina.com/images/sentence.webp)] bg-center bg-no-repeat bg-cover">
         <div className="absolute w-full h-full left-0 top-0 bg-black/[0.45]" />

         <div className="container mx-auto px-8 py-10 flex justify-center relative">
            <main className="bg-white px-5 py-5 md:w-[500px]">
               <h2 className="uppercase text-center text-3xl font-bold text-sky-600 mb-4">reservation</h2>

               <form className="flex flex-col gap-4" onSubmit={onSubmitHandler}>
                  <FormItem labelText="Check in:" inputId="dateIn" inputType="date" inputName="checkIn" />

                  <FormItem labelText="Check out:" inputId="dateOut" inputType="date" inputName="checkOut" />

                  <FormItem labelText="Number of guests:" inputId="guests" inputType="number" inputName="guests" />

                  <FormItem labelText="Accommodation" inputId="accommodation" inputType="select" inputName="accommodation" />

                  <FormItem labelText="E-mail adress" inputId="email" inputType="email" inputName="email" />

                  <FormItem labelText="Name:" inputId="name" inputType="text" inputName="name" />

                  <button type="submit" className="py-1 px-5 rounded-md uppercase text-white bg-sky-800 self-center">
                     reserve
                  </button>
               </form>

               <Link to="/">
                  <FontAwesomeIcon icon={faHouse} className="text-sky-800 text-2xl mt-4" />
               </Link>
            </main>
         </div>
      </section>
   );
};

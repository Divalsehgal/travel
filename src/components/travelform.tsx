import { useForm } from 'react-hook-form';

type Option = {
  value: string;
  label: string;
};

type FormData = {
  id: string;
  area: string;
  interest: string;
  budget: string;
  travelers: string;
  email: string;
};

type Props = {
  onSubmit: (data: FormData) => void;
};

const Travelform: any= ({ onSubmit }:Props) => {
  const areasOptions: Option[] = [
    { value: 'asia', label: 'Asia' },
    { value: 'europe', label: 'Europe' },
    { value: 'north-america', label: 'North America' },
    { value: 'south-america', label: 'South America' },
  ];

  const interestsOptions: Option[] = [
    { value: 'adventure', label: 'Adventure' },
    { value: 'beach', label: 'Beach' },
    { value: 'culture', label: 'Culture' },
    { value: 'nature', label: 'Nature' },
  ];

  const budgetOptions: Option[] = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  const numberOfTravelersOptions: Option[] = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' },
  ];

  const { register, handleSubmit } = useForm<FormData>();

  return (
    <div className="flex justify-center mt-20">
      <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <input
            type="email"
            className="px-4 py-2 border border-gray-300 rounded"
            placeholder="Enter your email"
            {...register('email')}
          />

          <select
            className="px-4 py-2 border border-gray-300 rounded"
            {...register('area')}
          >
            <option value="">Select an area</option>
            {areasOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded"
            {...register('interest')}
          >
            <option value="">Select an interest</option>
            {interestsOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded"
            {...register('budget')}
          >
            <option value="">Select a budget</option>
            {budgetOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded"
            {...register('travelers')}
          >
            <option value="">Select number of travelers</option>
            {numberOfTravelersOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Travelform;

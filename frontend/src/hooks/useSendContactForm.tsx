import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const useSendContactForm = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async formData => {
      const { data } = await axios.post('https://formspree.io/xgegaloy', formData);
      queryClient.invalidateQueries('contacts' as any);
      return data;
    },
  });

  return mutation;
};

export default useSendContactForm;

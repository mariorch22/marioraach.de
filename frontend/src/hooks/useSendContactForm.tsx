import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';

const useSendContactForm = () => {
    const queryClient = useQueryClient();

    // Definition der Mutation zum Senden des Kontaktformulars
    const mutation = useMutation({
        // Die Funktion, die das Kontaktformular sendet
        mutationFn: async (formData) => {
            // Hier könntest du die Kontaktformulardaten an einen API-Endpunkt senden
            const {data} = await axios.post("https://formspree.io/xgegaloy", formData);

            // Bei Erfolg: Ungültige Abfrage für den Cache von "contacts" machen
            queryClient.invalidateQueries('contacts' as any);

            // Rückgabe der Antwortdaten
            return data;
        }
    });

    return mutation;
};

export default useSendContactForm;

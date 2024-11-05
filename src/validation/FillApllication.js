import {z} from 'zod';

export const FillApplicationFormShema = z.object({
    full_name: z.string().min(1,{message: 'Full Name is Required'}),
    position: z.string().min(1,{message: 'Position is Required'}),
    citizenship_id: z.string().min(1,{message: 'Citizenship is Required'}),
    country_id: z.string().min(1,{message: 'Country is Required'}),
    city_id: z.string().min(1,{message: 'City is Required'}),
    email: z.string().email({message: 'Invalid Email Address'}),
    phone_code: z.string().min(1,{message: 'Phone Code is Required'}),
    phone: z.string().min(1,{message: 'Phone is Required'}),
    year_exp_id: z.string().min(1,{message: 'Required'}),
    primary_expertise_id: z.string().min(1,{message: 'Required'}),
    availability_id: z.any(),
    willingness_to_travel: z.string().min(1,{message: 'Required'}),
    linkedin_profile: z.string().min(1,{message: 'Required'}),
    skills_id: z.any(),
    industry_id: z.any(),
    project_type_id: z.any(),
    languages_id: z.any(),
    attachment: z.any(),
    portfolio_file: z.any(),
    portfolio_link: z.any(),
});
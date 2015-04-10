'use strict';

angular.module('assessmentEvaluationApp')
    .factory('resultsFromJson', function() {
        var ResultsFromJson = [{
            program: "Administrative Assistant",
            tagline: "Join the high growth AA field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [
                    {label: "Growth", url: "./images/outlook/growth.png"
                }],
                description: "Employment of administrative assistants is projected to grow 12 percent over the next 10 years. Administrative assistants perform routine clerical and administrative duties. They organize files, draft messages, schedule appointments, and support other staff.  http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Your innate desire for accuracy of task completion, work in a group or team environment,  deal with customers or clients,  and your goal around where you’d like to work make you a perfect fit for the Administrative Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Accounting Principles", url: "./images/skills/accounting_principles.png"},
                    {label: "MS Word", url: "./images/skills/ms_word.png"},
                    {label: "MS Excel", url: "./images/skills/ms_excel.png"},
                    {label: "PowerPoint", url: "./images/skills/ms_powerpoint.png"},
                    {label: "MS Office", url: "./images/skills/ms_office.png"},
                    {label: "10 Key", url: "./images/skills/10key.png"},
                    {label: "Words Per Minute", url: "./images/skills/words_per_minute.png"},
                    {label: "Scheduling & Planning", url: "./images/skills/scheduling_&_planning.png"},
                    {label: "Executive Support", url: "./images/skills/executive_support.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"
                }],
                description: "In the Administrative Assistant in training program, you’ll have the opportunity to earn 12 skill badges that signal your expertise to employers.  Skills like communication, Executive Support, Microsoft, and scheduling and planning are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "Microsoft Word", url: "./images/certifications/word.png"},
                    {label: "Microsoft Excel", url: "./images/certifications/excel.png"},
                    {label: "Microsoft Powerpoint", url: "./images/certifications/powerpoint.png"},
                    {label: "Microsoft Outlook", url: "./images/certifications/outlook.png"
                }],
                description: "The Administrative Assistant field does not require certifications, but our program makes you eligible for 4 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"

            }
        }, {
            program: "Business Accounting Specialist",
            tagline: "“Certified Bookkeepers are doing for accounting what paralegals did for law and P.A.’s did for medicine – but at a higher level”  Margaret Johnson",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "As the number of organizations increases and financial regulations become stricter, there will be greater demand for these workers to maintain books and provide accounting services with a projected 10 year growth rate of 11 percent.  http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Your innate desire to for accuracy of task completion, have freedom of decisions with structure, dealing with customers/clients, and your goal around where you’d like to work make you a perfect fit for the Business Accounting Specialist training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Accounting Principles", url: "./images/skills/accounting_principles.png"},
                    {label: "Payables & Receivables", url: "./images/skills/payables&receivables.png"},
                    {label: "Inventory", url: "./images/skills/INVENTORY.png"},
                    {label: "Financial Analysis", url: "./images/skills/financial_analysis.png"},
                    {label: "Payroll", url: "./images/skills/payroll.png"},
                    {label: "Taxes", url: "./images/skills/taxes.png"},
                    {label: "QuickBooks", url: "./images/skills/quickbooks.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "Business Processes", url: "./images/skills/business_process.png"},
                    {label: "Microsoft Word", url: "./images/skills/ms_word.png"},
                    {label: "Microsoft Excel", url: "./images/skills/ms_excel.png"},
                    {label: "MS PowerPoint", url: "./images/skills/ms_powerpoint.png"},
                    {label: "Words Per Minute", url: "./images/skills/words_per_minute.png"},
                    {label: "10 KEY", url: "./images/skills/10key.png"},
                    {label: "Scheduling & Planning", url: "./images/skills/scheduling_&_planning.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"
                }],
                description: "As  an Accounting Specialist in training, you’ll have the opportunity to earn over 17 skill badges that signal your expertise to employers.  Skills like Payroll, Taxes, Inventory, QuickBooks are Business processes are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "Certified Professional Bookkeeper", url: "./images/certifications/certified_professional_bookeeper.png"},
                    {label: "Microsoft Word", url: "./images/certifications/word.png"},
                    {label: "Microsoft Outlook", url: "./images/certifications/outlook.png"},
                    {label: "QuickBooks", url: "./images/certifications/intuit_quickbooks.png"},
                    {label: "MS PowerPoint", url: "./images/certifications/powerpoint.png"
                }],
                description: "The Accounting Specialist field does not require certifications, but our program makes you eligible 6 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Cosmetology",
            tagline: "Join the high growth CO field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "Growth", url: "./images/outlook/growth.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Color", url: "./images/skills/color.png"},
                    {label: "Cut", url: "./images/skills/cut.png"},
                    {label: "Facial", url: "./images/skills/facial.png"},
                    {label: "Build Your Business", url: "./images/skills/nab_business.png"},
                    {label: "Embracing Change", url: "./images/skills/nab_change.png"},
                    {label: "Salon & Spa Pro", url: "./images/skills/nab_professional.png"},
                    {label: "Styling", url: "./images/skills/styling.png"},
                    {label: "Manicure", url: "./images/skills/manicure.png"},
                    {label: "Pedicure", url: "./images/skills/pedicure.png"},
                    {label: "Customer WOW", url: "./images/skills/nab_wow.png"},
                    {label: "Complete Retail Experience", url: "./images/skills/nab_retail.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                     label: "Cosmetology License", url: "./images/certifications/cosmo.png"},
                    {label: "Sassoon ABC Cutting", url: "./images/certifications/abc_cut.png"},
                    {label: "NAB", url: "./images/certifications/nab.png"},
                    {label: "SASSOON ABC COLOR", url: "./images/certifications/abc_color.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }, {
            program: "HVAC",
            tagline: "Join the high growth HVAC field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Green Technology", url: "./images/skills/green.png"},
                    {label: "Troubleshoot Common HVAC Systems", url: "./images/skills/troubleshooting_hvac.png"},
                    {label: "Read Construction Drawings", url: "./images/skills/read_const_drawings.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                    label: "EPA", url: "./images/certifications/epa.png"},
                    {label: "Green", url: "./images/certifications/green.png"},
                    {label: "Indoor Air Quality", url: "./images/certifications/indoor_air_quality.png"},
                    {label: "TDLR ACR", url: "./images/certifications/tdlr_acr.png"},
                    {label: "HVAC", url: "./images/certifications/hvac.png"},
                    {label: "R410A", url: "./images/certifications/r410a.png"},
                    {label: "Nate", url: "./images/certifications/nate.png"},
                    {label: "Preventative Maintenance", url: "./images/certifications/prev_maintenance.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }, {
            program: "Medical Assistant",
            tagline: "Medical assistants are the most versatile allied health professionals.  They are cross-trained to perform clinical and administrative responsibilities – American Medical Association",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [
                    {label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "Employment of medical assistants is projected to grow 29 percent over the next 10 years, much faster than the average for all occupations. The growth of the aging baby-boom population will continue to spur demand for preventive medical services, which are often provided by physicians. As their practices expand, physicians will hire more assistants to perform routine administrative and clinical duties, allowing the physicians to see more patients. http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Teamwork", url: "./images/values/group.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Your innate desire to assist and care for others, interact with customers, prioritize work, work in a group or team environment,  and your goal around where you’d like to work make you a perfect fit for the Medical Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/anatomy.png"},
                    {label: "MS Word", url: "./images/skills/ms_word.png"},
                    {label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "Electronic Records", url: "./images/skills/electronic_health_records.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "Clinical Skills", url: "./images/skills/clinical_skills.png"},
                    {label: "Pharmacology", url: "./images/skills/pharmacology.png"},
                    {label: "Medical Terminology", url: "./images/skills/medical_terminology.png"},
                    {label: "Diseases of the Body", url: "./images/skills/diseases_of_the_body.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/medical_law_&_ethics.png"},
                    {label: "Phlebotomy", url: "./images/skills/phlebotomy.png"},
                    {label: "EKG", url: "./images/skills/ekg.png"},
                    {label: "HIPAA", url: "./images/skills/hippa.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"
                }],
                description: "In the Medical Assistant training program, you’ll have the opportunity to earn 14 skill badges that signal your expertise to employers.  Skills like EKG, Phlebotomy, Clinical management, and customer services are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "RMA", url: "./images/certifications/rma.png"},
                    {label: "CMAA", url: "./images/certifications/maa.png"},
                    {label: "CET", url: "./images/certifications/cet.png"},
                    {label: "EHRS", url: "./images/certifications/ehrs.png"},
                    {label: "WORD", url: "./images/certifications/word.png"},
                    {label: "CPR", url: "./images/certifications/cpr.png"},
                    {label: "CPT", url: "./images/certifications/cpt.png"
                }],
                description: "The Medical Assistant field does not require certifications for smaller facilities, our program makes you eligible for 7 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Medical Billing and Coding",
            tagline: "“Employers seek professionals with a comprehensive understanding of industry-standards codes and practices, which is why many prefer applicants with the industry recognized certifications” – UMA",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "Employment of medical coding is projected to grow 22 percent over the next 10 years, much faster than the average for all occupations. The growth of the aging baby-boom population will continue to spur demand for preventive medical services, which are often provided by physicians. http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Your innate desire to for accuracy of task completion, interact with customers/business, evaluating information, work in a group or team environment,  and your goal around where you’d like to work make you a perfect fit for the Medical Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/anatomy.png"},
                    {label: "MS Word", url: "./images/skills/ms_word.png"},
                    {label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "Electronic Records", url: "./images/skills/electronic_health_records.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "HIPAA", url: "./images/skills/hipaa.png"},
                    {label: "Charting", url: "./images/skills/charting.png"},
                    {label: "ICD 9", url: "./images/skills/icd9.png"},
                    {label: "ICD 10", url: "./images/skills/icd10.png"},
                    {label: "Medical Terminology", url: "./images/skills/medical_terminology.png"},
                    {label: "Diseases of the Body", url: "./images/skills/diseases_of_the_body.png"},
                    {label: "CPT", url: "./images/skills/cpt.png"},
                    {label: "10 Key", url: "./images/skills/10key.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/medical_law_&_ethics.png"},
                    {label: "Reading", url: "./images/skills/reading.png"
                }],
                description: "In the Medical Assistant training program, you’ll have the opportunity to earn 15 skill badges that signal your expertise to employers.  Skills like ICD 9 and 10, Electronic Health Records, HIPPA, and customer services are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "CBCS", url: "./images/certifications/cbcs.png"},
                    {label: "CMAA", url: "./images/certifications/cmaa.png"},
                    {label: "EHRS", url: "./images/certifications/ehrs.png"},
                    {label: "Microsoft Word", url: "./images/certifications/ms_word.png"
                }],
                description: "The Medical Billing and Coding field does not require certifications; our program makes you eligible for 4 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Medical Office Specialist",
            tagline: "“Medical secretaries manage the daily fast-paced and often hectic flow of patients through a doctor’s office” – Katy Marquardt",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "Growth", url: "./images/outlook/growth.png"
                }],
                description: "Employment of medical office specialists is projected to grow 12 percent over the next 10 years. Medical specialists manage the hectic flow of patients. They organize patient flow, files, draft messages, schedule appointments, and support other staff.  http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Teamwork", url: "./images/values/group.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Your innate desire for accuracy of task completion, work in a group or team environment,  deal with customers or clients,  and your goal around where you’d like to work make you a perfect fit for the Medical Office Specialist training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/anatomy.png"},
                    {label: "MS Word", url: "./images/skills/ms_word.png"},
                    {label: "MS Excel", url: "./images/skills/ms_excel.png"},
                    {label: "MS Power Point", url: "./images/skills/ms_powerpoint.png"},
                    {label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "Electronic Records", url: "./images/skills/electronic_health_records.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"},
                    {label: "WPM", url: "./images/skills/words_per_minute.png"},
                    {label: "10 Key", url: "./images/skills/10key.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "Medical Terminology", url: "./images/skills/medical_terminology.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/medical_law_&_ethics.png"},
                    {label: "HIPAA", url: "./images/skills/hipaa.png"
                }],
                description: "In the Medical Office Specialist training program, you’ll have the opportunity to earn 13 skill badges that signal your expertise to employers.  Skills like communication, Executive Support, Microsoft, and scheduling and planning are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "CMAA", url: "./images/certifications/maa.png"},
                    {label: "MS Word", url: "./images/certifications/word.png"},
                    {label: "MS Power Point", url: "./images/certifications/powerpoint.png"},
                    {label: "EHRS", url: "./images/certifications/ehrs.png"},
                    {label: "MS Excel", url: "./images/certifications/excel.png"
                }],
                description: "The Medical Office Specialist field does not require certifications, but our program makes you eligible for 5 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Pharmacy Technician",
            tagline: "“Pharmacy technicians play a major role in modern pharmacy practice. The pharmacist relies on the technician to provide an extra layer of safety.” – American Pharmacists Association",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "Employment of Pharmacy Technicians is projected to grow 20 percent over the next 10 years, much faster than the average for all occupations. Several factors will lead to increased demand for prescription medications.   http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Teamwork", url: "./images/values/group.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Your innate desire to for accuracy of task completion, interact with customers/businesses, evaluating information, work in a group or team environment,  and your goal around where you’d like to work make you a perfect fit for the Medical Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/anatomy.png"},
                    {label: "MS Word", url: "./images/skills/ms_word.png"},
                    {label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "Medical Terminology", url: "./images/skills/medical_terminology.png"},
                    {label: "Diseases of the Body", url: "./images/skills/diseases_of_the_body.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/medical_law_&_ethics.png"},
                    {label: "Basic Compounding", url: "./images/skills/basic_compounding.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"
                }],
                description: "In the Pharmacy Technician training program, you’ll have the opportunity to earn 9 skill badges that signal your expertise to employers.  Skills like basic compounding, diseases of the body, and customer services are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "PTCE", url: "./images/certifications/ptce.png"},
                    {label: "WORD", url: "./images/certifications/word.png"},
                    {label: "MS Power Point", url: "./images/certifications/powerpoint.png"},
                    {label: "EHRS", url: "./images/certifications/ehrs.png"},
                    {label: "MS Excel", url: "./images/certifications/excel.png"
                }],
                description: "The Pharmacy Technician field does require certifications; our program makes you eligible for 2 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Welding",
            tagline: "Join the high growth Welding field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/anatomy.png"},
                    {label: "MS Word", url: "./images/skills/ms_word.png"},
                    {label: "MS Excel", url: "./images/skills/ms_excel.png"},
                    {label: "MS Power Point", url: "./images/skills/ms_powerpoint.png"},
                    {label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "Electronic Records", url: "./images/skills/electronic_health_records.png"},
                    {label: "WPM", url: "./images/skills/words_per_minute.png"},
                    {label: "10 Key", url: "./images/skills/10key.png"},
                    {label: "HIPAA", url: "./images/skills/HIPAA.png"},
                    {label: "Medical Terminology", url: "./images/skills/medical_terminology.png"},
                    {label: "communication", url: "./images/skills/communication.png"},
                    {label: "professionalism", url: "./images/skills/professionalism.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/medical_law_&_ethics.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                    label: "NCCER", url: "./images/certifications/nccer.png"},
                    {label: "American Welding Society", url: "./images/certifications/aws.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }, {
            program: "Computer Support Specialist",
            tagline: "Join the high growth CSS field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/highgrowth.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/alone.png"},
                    {label: "Precision", url: "./images/values/precision.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Customer Service", url: "./images/skills/customer_service.png"},
                    {label: "Listening", url: "./images/skills/listening.png"},
                    {label: "Problem Solving", url: "./images/skills/problem_solving.png"},
                    {label: "Public Speaking", url: "./images/skills/public_speaking.png"},
                    {label: "Writing", url: "./images/skills/writing.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                    label: "IC3 Digital Literacy Cert.", url: "./images/certifications/ic3_digital_literacy.png"},
                    {label: "CompTIA A+", url: "./images/certifications/comptia_a+.png"},
                    {label: "NETSIM PC PRO", url: "./images/certifications/test_out_network_pro.png"},
                    {label: "Windows Client and Server Admin", url: "./images/certifications/ms_windows.png"},
                    {label: "CompTIA Network+N10-005", url: "./images/certifications/comptia_network+.png"},
                    {label: "Test Out Network Pro", url: "./images/certifications/test_out_network_pro.png"},
                    {label: "CompTIA Security +", url: "./images/certifications/comptia_security+.png"},
                    {label: "MS Excel", url: "./images/certifications/excel.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }];
        return ResultsFromJson;
    });
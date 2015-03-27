'use strict';

angular.module('assessmentEvaluationApp')
    .factory('resultsFromJson', function() {
        var ResultsFromJson = [{
            program: "Administrative Assistant",
            tagline: "Join the high growth AA field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [
                    {label: "Growth", url: "./images/outlook/GROWTH.png"
                }],
                description: "Employment of administrative assistants is projected to grow 12 percent over the next 10 years. Administrative assistants perform routine clerical and administrative duties. They organize files, draft messages, schedule appointments, and support other staff.  http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Your innate desire for accuracy of task completion, work in a group or team environment,  deal with customers or clients,  and your goal around where you’d like to work make you a perfect fit for the Administrative Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Accounting Principles", url: "./images/skills/ACCOUNTING_PRINCIPLES.png"},
                    {label: "MS Word", url: "./images/skills/MS_WORD.png"},
                    {label: "MS Excel", url: "./images/skills/MS_EXCEL.png"},
                    {label: "PowerPoint", url: "./images/skills/MS_POWERPOINT.png"},
                    {label: "MS Office", url: "./images/skills/MS_OFFICE.png"},
                    {label: "10 Key", url: "./images/skills/10KEY.png"},
                    {label: "Words Per Minute", url: "./images/skills/WORDS_PER_MINUTE.png"},
                    {label: "Scheduling & Planning", url: "./images/skills/SCHEDULING_&_PLANNING.png"},
                    {label: "Executive Support", url: "./images/skills/EXECUTIVE_SUPPORT.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"
                }],
                description: "In the Administrative Assistant in training program, you’ll have the opportunity to earn 12 skill badges that signal your expertise to employers.  Skills like Communication, Executive Support, Microsoft, and scheduling and planning are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "Microsoft Word", url: "./images/certifications/WORD.png"},
                    {label: "Microsoft Excel", url: "./images/certifications/EXCEL.png"},
                    {label: "Microsoft Powerpoint", url: "./images/certifications/POWERPOINT.png"},
                    {label: "Microsoft Outlook", url: "./images/certifications/OUTLOOK.png"
                }],
                description: "The Administrative Assistant field does not require certifications, but our program makes you eligible for 4 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"

            }
        }, {
            program: "Business Accounting Specialist",
            tagline: "“Certified Bookkeepers are doing for accounting what paralegals did for law and P.A.’s did for medicine – but at a higher level”  Margaret Johnson",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "As the number of organizations increases and financial regulations become stricter, there will be greater demand for these workers to maintain books and provide accounting services with a projected 10 year growth rate of 11 percent.  http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Your innate desire to for accuracy of task completion, have freedom of decisions with structure, dealing with customers/clients, and your goal around where you’d like to work make you a perfect fit for the Business Accounting Specialist training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Accounting Principles", url: "./images/skills/ACCOUNTING_PRINCIPLES.png"},
                    {label: "Payables & Receivables", url: "./images/skills/PAYABLES&RECEIVABLES.png"},
                    {label: "Inventory", url: "./images/skills/INVENTORY.png"},
                    {label: "Financial Analysis", url: "./images/skills/FINANCIAL_ANALYSIS.png"},
                    {label: "Payroll", url: "./images/skills/PAYROLL.png"},
                    {label: "Taxes", url: "./images/skills/TAXES.png"},
                    {label: "QuickBooks", url: "./images/skills/QUICKBOOKS.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "Business Processes", url: "./images/skills/BUSINESS_PROCESS.png"},
                    {label: "Microsoft Word", url: "./images/skills/MS_WORD.png"},
                    {label: "Microsoft Excel", url: "./images/skills/MS_EXCEL.png"},
                    {label: "MS PowerPoint", url: "./images/skills/MS_POWERPOINT.png"},
                    {label: "Words Per Minute", url: "./images/skills/WORDS_PER_MINUTE.png"},
                    {label: "10 KEY", url: "./images/skills/10KEY.png"},
                    {label: "Scheduling & Planning", url: "./images/skills/SCHEDULING_&_PLANNING.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"
                }],
                description: "As  an Accounting Specialist in training, you’ll have the opportunity to earn over 17 skill badges that signal your expertise to employers.  Skills like Payroll, Taxes, Inventory, QuickBooks are Business processes are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "Certified Professional Bookkeeper", url: "./images/certifications/CERTIFIED_PROFESSIONAL_BOOOKEEPER.png"},
                    {label: "Microsoft Word", url: "./images/certifications/WORD.png"},
                    {label: "Microsoft Outlook", url: "./images/certifications/OUTLOOK.png"},
                    {label: "QuickBooks", url: "./images/certifications/INTUIT_QUICKBOOKS.png"},
                    {label: "MS PowerPoint", url: "./images/certifications/POWERPOINT.png"
                }],
                description: "The Accounting Specialist field does not require certifications, but our program makes you eligible 6 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Cosmetology",
            tagline: "Join the high growth CO field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "Growth", url: "./images/outlook/GROWTH.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Color", url: "./images/skills/COLOR.png"},
                    {label: "Cut", url: "./images/skills/COLOR.png"},
                    {label: "Facial", url: "./images/skills/FACIAL.png"},
                    {label: "Build Your Business", url: "./images/skills/NAB_BUSINESS.png"},
                    {label: "Embracing Change", url: "./images/skills/NAB_CHANGE.png"},
                    {label: "Salon & Spa Pro", url: "./images/skills/NAB_PROFESSIONAL.png"},
                    {label: "Styling", url: "./images/skills/STYLING.png"},
                    {label: "Manicure", url: "./images/skills/MANICURE.png"},
                    {label: "Pedicure", url: "./images/skills/PEDICURE.png"},
                    {label: "Customer WOW", url: "./images/skills/NAB_WOW.png"},
                    {label: "Complete Retail Experience", url: "./images/skills/NAB_RETAIL.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                     label: "Cosmetology License", url: "./images/certifications/COSMO.png"},
                    {label: "Sassoon ABC Cutting", url: "./images/certifications/ABC_CUT.png"},
                    {label: "NAB", url: "./images/certifications/NAB.png"},
                    {label: "SASSOON ABC COLOR", url: "./images/certifications/ABC_COLOR.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }, {
            program: "HVAC",
            tagline: "Join the high growth HVAC field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Green Technology", url: "./images/skills/GREEN.png"},
                    {label: "Troubleshoot Common HVAC Systems", url: "./images/skills/TROUBLESHOOTING_HVAC.png"},
                    {label: "Read Construction Drawings", url: "./images/skills/READ_CONST_DRAWINGS.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                    label: "EPA", url: "./images/certifications/EPA.png"},
                    {label: "Green", url: "./images/certifications/GREEN.png"},
                    {label: "Indoor Air Quality", url: "./images/certifications/INDOOR_AIR_QUALITY.png"},
                    {label: "TDLR ACR", url: "./images/certifications/TDLR_ACR.png"},
                    {label: "HVAC", url: "./images/certifications/HVAC.png"},
                    {label: "R410A", url: "./images/certifications/R410A.png"},
                    {label: "Nate", url: "./images/certifications/NATE.png"},
                    {label: "Preventative Maintenance", url: "./images/certifications/PREV_MAINTENANCE.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }, {
            program: "Medical Assistant",
            tagline: "Medical assistants are the most versatile allied health professionals.  They are cross-trained to perform clinical and administrative responsibilities – American Medical Association",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [
                    {label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "Employment of medical assistants is projected to grow 29 percent over the next 10 years, much faster than the average for all occupations. The growth of the aging baby-boom population will continue to spur demand for preventive medical services, which are often provided by physicians. As their practices expand, physicians will hire more assistants to perform routine administrative and clinical duties, allowing the physicians to see more patients. http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Teamwork", url: "./images/values/GROUP.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Your innate desire to assist and care for others, interact with customers, prioritize work, work in a group or team environment,  and your goal around where you’d like to work make you a perfect fit for the Medical Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/ANATOMY.png"},
                    {label: "MS Word", url: "./images/skills/MS_WORD.png"},
                    {label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Electronic Records", url: "./images/skills/ELECTRONIC_HEALTH_RECORDS.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "Clinical Skills", url: "./images/skills/CLINICAL_SKILLS.png"},
                    {label: "Pharmacology", url: "./images/skills/PHARMACOLOGY.png"},
                    {label: "Medical Terminology", url: "./images/skills/MEDICAL_TERMINOLOGY.png"},
                    {label: "Diseases of the Body", url: "./images/skills/DISEASES_OF_THE_BODY.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/MEDICAL_LAW_&_ETHICS.png"},
                    {label: "Phlebotomy", url: "./images/skills/PHLEBOTOMY.png"},
                    {label: "EKG", url: "./images/skills/EKG.png"},
                    {label: "HIPAA", url: "./images/skills/HIPAA.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"
                }],
                description: "In the Medical Assistant training program, you’ll have the opportunity to earn 14 skill badges that signal your expertise to employers.  Skills like EKG, Phlebotomy, Clinical management, and customer services are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "RMA", url: "./images/certifications/RMA.png"},
                    {label: "CMAA", url: "./images/certifications/MAA.png"},
                    {label: "CET", url: "./images/certifications/CET.png"},
                    {label: "EHRS", url: "./images/certifications/EHRS.png"},
                    {label: "WORD", url: "./images/certifications/WORD.png"},
                    {label: "CPR", url: "./images/certifications/CPR.png"},
                    {label: "CPT", url: "./images/certifications/CPT.png"
                }],
                description: "The Medical Assistant field does not require certifications for smaller facilities, our program makes you eligible for 7 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Medical Billing and Coding",
            tagline: "“Employers seek professionals with a comprehensive understanding of industry-standards codes and practices, which is why many prefer applicants with the industry recognized certifications” – UMA",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "Employment of medical coding is projected to grow 22 percent over the next 10 years, much faster than the average for all occupations. The growth of the aging baby-boom population will continue to spur demand for preventive medical services, which are often provided by physicians. http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Your innate desire to for accuracy of task completion, interact with customers/business, evaluating information, work in a group or team environment,  and your goal around where you’d like to work make you a perfect fit for the Medical Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/ANATOMY.png"},
                    {label: "MS Word", url: "./images/skills/MS_WORD.png"},
                    {label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Electronic Records", url: "./images/skills/ELECTRONIC_HEALTH_RECORDS.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "HIPAA", url: "./images/skills/HIPAA.png"},
                    {label: "Charting", url: "./images/skills/CHARTING.png"},
                    {label: "ICD 9", url: "./images/skills/ICD9.png"},
                    {label: "ICD 10", url: "./images/skills/ICD10.png"},
                    {label: "Medical Terminology", url: "./images/skills/MEDICAL_TERMINOLOGY.png"},
                    {label: "Diseases of the Body", url: "./images/skills/DISEASES_OF_THE_BODY.png"},
                    {label: "CPT", url: "./images/skills/CPT.png"},
                    {label: "10 Key", url: "./images/skills/10KEY.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/MEDICAL_LAW_&_ETHICS.png"},
                    {label: "Reading", url: "./images/skills/READING.png"
                }],
                description: "In the Medical Assistant training program, you’ll have the opportunity to earn 15 skill badges that signal your expertise to employers.  Skills like ICD 9 and 10, Electronic Health Records, HIPPA, and customer services are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "CBCS", url: "./images/certifications/CBCS.png"},
                    {label: "CMAA", url: "./images/certifications/CMAA.png"},
                    {label: "EHRS", url: "./images/certifications/EHRS.png"},
                    {label: "Microsoft Word", url: "./images/certifications/MS_WORD.png"
                }],
                description: "The Medical Billing and Coding field does not require certifications; our program makes you eligible for 4 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Medical Office Specialist",
            tagline: "“Medical secretaries manage the daily fast-paced and often hectic flow of patients through a doctor’s office” – Katy Marquardt",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "Growth", url: "./images/outlook/GROWTH.png"
                }],
                description: "Employment of medical office specialists is projected to grow 12 percent over the next 10 years. Medical specialists manage the hectic flow of patients. They organize patient flow, files, draft messages, schedule appointments, and support other staff.  http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Teamwork", url: "./images/values/GROUP.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Your innate desire for accuracy of task completion, work in a group or team environment,  deal with customers or clients,  and your goal around where you’d like to work make you a perfect fit for the Medical Office Specialist training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/ANATOMY.png"},
                    {label: "MS Word", url: "./images/skills/MS_WORD.png"},
                    {label: "MS Excel", url: "./images/skills/MS_EXCEL.png"},
                    {label: "MS Power Point", url: "./images/skills/MS_POWERPOINT.png"},
                    {label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Electronic Records", url: "./images/skills/ELECTRONIC_HEALTH_RECORDS.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"},
                    {label: "WPM", url: "./images/skills/WORDS_PER_MINUTE.png"},
                    {label: "10 Key", url: "./images/skills/10KEY.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "Medical Terminology", url: "./images/skills/MEDICAL_TERMINOLOGY.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/MEDICAL_LAW_&_ETHICS.png"},
                    {label: "HIPAA", url: "./images/skills/HIPAA.png"
                }],
                description: "In the Medical Office Specialist training program, you’ll have the opportunity to earn 13 skill badges that signal your expertise to employers.  Skills like Communication, Executive Support, Microsoft, and scheduling and planning are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "CMAA", url: "./images/certifications/MAA.png"},
                    {label: "MS Word", url: "./images/certifications/WORD.png"},
                    {label: "MS Power Point", url: "./images/certifications/POWERPOINT.png"},
                    {label: "EHRS", url: "./images/certifications/EHRS.png"},
                    {label: "MS Excel", url: "./images/certifications/EXCEL.png"
                }],
                description: "The Medical Office Specialist field does not require certifications, but our program makes you eligible for 5 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Pharmacy Technician",
            tagline: "“Pharmacy technicians play a major role in modern pharmacy practice. The pharmacist relies on the technician to provide an extra layer of safety.” – American Pharmacists Association",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "Employment of Pharmacy Technicians is projected to grow 20 percent over the next 10 years, much faster than the average for all occupations. Several factors will lead to increased demand for prescription medications.   http://www.bls.gov/data/"
            },

            SIV: {
                images: [{
                    label: "Teamwork", url: "./images/values/GROUP.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Your innate desire to for accuracy of task completion, interact with customers/businesses, evaluating information, work in a group or team environment,  and your goal around where you’d like to work make you a perfect fit for the Medical Assistant training program!"
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/ANATOMY.png"},
                    {label: "MS Word", url: "./images/skills/MS_WORD.png"},
                    {label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "Medical Terminology", url: "./images/skills/MEDICAL_TERMINOLOGY.png"},
                    {label: "Diseases of the Body", url: "./images/skills/DISEASES_OF_THE_BODY.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/MEDICAL_LAW_&_ETHICS.png"},
                    {label: "Basic Compounding", url: "./images/skills/BASIC_COMPOUNDING.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"
                }],
                description: "In the Pharmacy Technician training program, you’ll have the opportunity to earn 9 skill badges that signal your expertise to employers.  Skills like basic compounding, diseases of the body, and customer services are some of the most sought after from our employer network!"
            },

            Certifications: {
                images: [{
                    label: "PTCE", url: "./images/certifications/PTCE.png"},
                    {label: "WORD", url: "./images/certifications/WORD.png"},
                    {label: "MS Power Point", url: "./images/certifications/POWERPOINT.png"},
                    {label: "EHRS", url: "./images/certifications/EHRS.png"},
                    {label: "MS Excel", url: "./images/certifications/EXCEL.png"
                }],
                description: "The Pharmacy Technician field does require certifications; our program makes you eligible for 2 national certifications, enhancing your competitive edge in the job market.  Show employers your career passion for business!"
            }

        }, {
            program: "Welding",
            tagline: "Join the high growth Welding field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Anatomy", url: "./images/skills/ANATOMY.png"},
                    {label: "MS Word", url: "./images/skills/MS_WORD.png"},
                    {label: "MS Excel", url: "./images/skills/MS_EXCEL.png"},
                    {label: "MS Power Point", url: "./images/skills/MS_POWERPOINT.png"},
                    {label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Electronic Records", url: "./images/skills/ELECTRONIC_HEALTH_RECORDS.png"},
                    {label: "WPM", url: "./images/skills/WORDS_PER_MINUTE.png"},
                    {label: "10 Key", url: "./images/skills/10KEY.png"},
                    {label: "HIPAA", url: "./images/skills/HIPAA.png"},
                    {label: "Medical Terminology", url: "./images/skills/MEDICAL_TERMINOLOGY.png"},
                    {label: "Communication", url: "./images/skills/COMMUNICATION.png"},
                    {label: "Professionalism", url: "./images/skills/PROFESSIONALISM.png"},
                    {label: "Medical Law & Ethics", url: "./images/skills/MEDICAL_LAW_&_ETHICS.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                    label: "NCCER", url: "./images/certifications/NCCER.png"},
                    {label: "American Welding Society", url: "./images/certifications/AWS.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }, {
            program: "Computer Support Specialist",
            tagline: "Join the high growth CSS field and help others",
            background: "http://thumbs.dreamstime.com/z/grunge-rustic-wood-wall-background-vintage-high-details-hd-quality-39668749.jpg",
            Outlook: {
                images: [{
                    label: "High Growth", url: "./images/outlook/HIGHGROWTH.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            SIV: {
                images: [{
                    label: "Work Alone", url: "./images/values/ALONE.png"},
                    {label: "Precision", url: "./images/values/PRECISION.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Skills_Badges: {
                images: [{
                    label: "Customer Service", url: "./images/skills/CUSTOMER_SERVICE.png"},
                    {label: "Listening", url: "./images/skills/LISTENING.png"},
                    {label: "Problem Solving", url: "./images/skills/PROBLEM_SOLVING.png"},
                    {label: "Public Speaking", url: "./images/skills/PUBLIC_SPEAKING.png"},
                    {label: "Writing", url: "./images/skills/WRITING.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            },

            Certifications: {
                images: [{
                    label: "IC3 Digital Literacy Cert.", url: "./images/certifications/IC3_Digital_Literacy.png"},
                    {label: "CompTIA A+", url: "./images/certifications/CompTIA_A+.png"},
                    {label: "NETSIM PC PRO", url: "./images/certifications/Test_Out_Network_Pro.png"},
                    {label: "Windows Client and Server Admin", url: "./images/certifications/MS_Windows.png"},
                    {label: "CompTIA Network+N10-005", url: "./images/certifications/CompTIA_Network+.png"},
                    {label: "Test Out Network Pro", url: "./images/certifications/Test_Out_Network_Pro.png"},
                    {label: "CompTIA Security +", url: "./images/certifications/CompTIA_Security+.png"},
                    {label: "MS Excel", url: "./images/certifications/EXCEL.png"
                }],
                description: "Biodiesel blog yr selvage. Trust fund actually Brooklyn roof party church-key, messenger bag meh polaroid authentic cardigan kitsch mixtape gastropub tattooed lomo."
            }

        }];
        return ResultsFromJson;
    });
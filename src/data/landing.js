export const landingData = {
    buttonsCover : [
        {
            id: 1,
            title: 'Normas',
            colorClassName: 'bg-green-100',
            href: 'rules'
        },
        {
            id: 2,
            title: 'Creditos',
            colorClassName: 'bg-violet-100',
            href: 'credits'
        },
        {
            id: 3,
            title: 'Multas e interés',
            colorClassName: 'bg-orange-100',
            href: 'debts'
        },
        {
            id: 4,
            title: 'Requisitos',
            colorClassName: 'bg-blue-100',
            href: 'requirements'
        },
        {
            id: 5,
            title: 'Rifas y eventos',
            colorClassName: 'bg-pink-100',
            href: 'events'
        },
        {
            id: 6,
            title: 'Liquidación',
            colorClassName: 'bg-red-100',
            href: 'payment'
        }
    ],
    items: [
        {
            id: 0,
            imgURL: 'https://assets.website-files.com/5c8b2e2664f8768dfb1ef7ff/5d2da3052be6ba58cce18efa_shiny-butt.gif',
            title: '¡No más pelado en diciembre!',
            icon: '🔮',
            description: '<p>La idea de la natillera surge con el fin de incentivar un ahorro navideño...</p><p>Es administrada por personas responsables.</p>',
            subItems: []
        },
        {
            id: 1,
            imgURL: 'https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-leadership-1@400x400.png',
            title: ' Normas del natillero',
            icon: '✨',
            description: `<p>
            Antes de iniciar con las normas es importante tener claro; Este es un fondo de ahorro para personas de confianza, no tiene
            fines lucrativos para ninguna de las partes.
            </p>
            <p class="mt-5">
                Si desea hacer parte de este mundo de ahorro familiar bienvenido a
                natilleando.
            </p>
            `,
            subItems: [
                {
                    id: 0,
                    label: 'El periodo de ahorro abarca desde Enero a Diciembre del año en curso.'
                },
                {
                    id: 1,
                    label: 'Si el socio decide retirarse antes de Diciembre no recibirá los intereses acumulados hasta la fecha y le serán descontado del importe ahorrado las muntas o deudas acumuladas en el caso de tener.'
                },
                {
                    id: 2,
                    label: 'Los intereses obtenidos en el periodo de ahorro se repartirá a todos los socios por igual, independientes del ahorro invertido por cada socio.'
                },
                {
                    id: 3,
                    label: 'Los beneficios a repartir se obtendrán a través de; multas, rifas, eventos, intereses generados por nequi, intereses generados por préstamos y otros extraordinarios.'
                }
                
            ],
            href: 'rules'
        },
        {
            id: 2,
            imgURL: 'https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-evaluate-performance-employee-2@400x400.png',
            title: 'Requisitos',
            icon: '✔️',
            description: 'Ingreso y ahorro',
            subItems: [
                {
                    id: 0,
                    label: 'La inscripción tiene un costo de $ 5.000 pesos anuales.'
                },
                {
                    id: 1,
                    label: 'El ahorro puede ser variable, pero solo se realizará un único ingreso al mes.'
                },
                {
                    id: 2,
                    label: 'Para mantener actualizada la información de los socios, este debe diligenciar el formulario de datos que hay en la app.'
                }
            ],
            href: 'requirements'
        },
        {
            id: 3,
            imgURL: 'https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-overworked-employee-3@400x400.png',
            title: 'Multas e interés',
            icon: '💳',
            description: '',
            subItems: [
                {
                    id: 0,
                    label: 'En caso de no aportar la cuota de ahorro dentro de los cinco primeros días de cada mes, se sancionará con una multa de $500 pesos por cada día de mora.'
                },
                {
                    id: 1,
                    label: 'En caso de no reingresar los créditos solicitados en el plazo acordado esto tendrá una sanción del 5% de interés  sobre el valor solicitado y se aplicara por cada mes solicitado. En caso de ser un crédito de días se le aplicará una sanción de $500 pesos por día de mora desde la fecha de vencimiento.'
                },
                {
                    id: 2,
                    label: 'Las multas como los intereses deben ser ingresados al inicio de mes con la cuota del ahorro.'
                },
                {
                    id: 3,
                    label: 'Impulsamos la buena gestión y estimulación del dinero. Si el socio acumula un mes de mora será automáticamente expulsado de la natillera..'
                }
            ],
            href: 'debts'
        },
        {
            id: 4,
            imgURL: 'https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-work-life-balance-2@400x400.png',
            title: 'Créditos',
            icon: '💸',
            description: '',
            subItems: [
                {
                    id: 0,
                    label: 'Los créditos a solicitar, nunca podran exceder el monto ahorrado por el socio.'
                },
                {
                    id: 1,
                    label: 'Solo se concederán créditos a los socios de la natillera.'
                },
                {
                    id: 2,
                    label: 'El crédito a solicitar, solo se realizará sobre el 75% del ahorro aportado por el socio y el otro 25% es para cubrir multas y moras en caso de algún incumplimiento por parte del socio. Este será reintegrado una vez finalizado el periodo del credito solitado.'
                },
                {
                    id: 3,
                    label: 'Los créditos solicitados por la app se gestionará de manera más rápida su desembolso.'
                },
                {
                    id:4,
                    label: 'Nota: Al socio expulsado por mora se le devolverá el monto ahorrado una vez descontado las sanciones anteriormente mencionadas en este apartado.'
                }
            ],
            href: 'credits'
        },
        {
            id: 5,
            imgURL: 'https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-team-success-3@400x400.png',
            title: 'Rifas y eventos',
            icon: '🎉',
            description: '',
            subItems: [
                {
                    id: 0,
                    label: 'En caso de que algún socio sea el afortunado ganador de la rifa mensual. Esta será pagada al día siguiente del sorteo.'
                },
                {
                    id: 1,
                    label: 'Socio que por algún motivo no haya cancelado la rifa al momento del sorteo, no entrara a participar en el mismo.'
                },
            ],
            href: 'events'
        },
        {
            id: 6,
            imgURL: 'https://wixtzvsuyxagezjctvdb.supabase.in/storage/v1/object/public/bucket/streamline-icon-becoming-rich-2@400x400.png',
            title: 'Liquidación',
            icon: '🤑',
            description: `<p>La natillera será liquidada el 1 de diciembre de cada año, y se entregará a cada socio, el ahorro que haya hecho durante los 11 meses,
            los intereses que correspondan al monto del ahorro. Siempre y cuando no tengas deudas pendientes.</p>
            <p class="mt-5">Estas normas estas sujetas a cambios de acuerdo a las nuevas necesidades de <span class="font-bold">Natilleando</span>.</p>
            `,
            subItems: '',
            href: 'payment'
        }
    ],
    subscribeItem: {
        title: '¡No te quedes pelado!',
        icon: '',
        description: '<p>Únete al equipo y crezcamos juntos ahorrando.</p>',
    },
}
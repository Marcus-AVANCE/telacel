// ============================================
// DADOS DE TODOS OS PRESTADORES
// ============================================

const prestadores = {
    carlos: {
        nome: "Carlos Silva",
        profissao: "Cabeleireiro",
        foto: "👨‍🦰",  // Depois você troca por link de foto real
        cidade: "São Paulo - SP",
        avaliacao: 4.9,
        numeroAvaliacoes: 127,
        bio: "Especialista em cortes masculinos e femininos com mais de 10 anos.",
        whatsapp: "5511999999999",
        
        servicos: [
            { nome: "Corte Masculino", preco: 50 },
            { nome: "Barba", preco: 30 },
            { nome: "Corte + Barba", preco: 70 }
        ],
        
        horarios: ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"],
        agendamentos: {},
        clientes: {}
    },
    
    maria: {
        nome: "Maria Santos",
        profissao: "Manicure",
        foto: "👩‍🎨",
        cidade: "São Paulo - SP",
        avaliacao: 4.8,
        numeroAvaliacoes: 89,
        bio: "Especialista em unhas com mais de 8 anos.",
        whatsapp: "5511988888888",
        
        servicos: [
            { nome: "Manicure", preco: 40 },
            { nome: "Pedicure", preco: 50 },
            { nome: "Manicure + Pedicure", preco: 80 }
        ],
        
        horarios: ["14:00", "15:00", "16:00", "17:00", "18:00"],
        agendamentos: {},
        clientes: {}
    }
};
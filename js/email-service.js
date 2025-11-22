class EmailService {
    constructor() {
        this.apiKey = 'xsmtpsib-6962cab20aa9f005097326b04d6051b45f2fb6ee134ba1f54d982061a7cbeaf5-X05ZdNQAP63bpOom';
        this.fromEmail = 'aprigio.rj@gmail.com';
    }

    async sendVerificationCode(email, code) {
        try {
            const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    personalizations: [{
                        to: [{ email: email }],
                        subject: 'Código de Verificação - Palpites IA'
                    }],
                    from: { email: this.fromEmail },
                    content: [{
                        type: 'text/html',
                        value: `
                            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                                <h2 style="color: #00ff88;">Palpites IA - Verificação de Conta</h2>
                                <p>Seu código de verificação é:</p>
                                <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; color: #000;">
                                    ${code}
                                </div>
                                <p>Este código expira em 10 minutos.</p>
                                <p><small>Se você não solicitou este código, ignore este email.</small></p>
                            </div>
                        `
                    }]
                })
            });

            return response.ok;
        } catch (error) {
            console.error('Erro ao enviar email:', error);
            return false;
        }
    }
}

const emailService = new EmailService();

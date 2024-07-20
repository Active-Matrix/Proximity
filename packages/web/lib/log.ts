export const log = (label?: string, ...args: any) => {
  console.log(
    `%c ${label} `,
    'background: #5ea102; color: white; padding: 2px 5px; border-radius: 12px; color: white; font-weight: bold',
    args
  );
}
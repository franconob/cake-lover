export enum ActionType {
  CREATE_CAKE_START = "[cake] create start"
}

export default {
  createCakeStart: (name: string, comment: string, yumFactor: number) => ({
    type: ActionType.CREATE_CAKE_START,
    payload: { name, comment, yumFactor }
  })
};

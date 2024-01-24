import { UserPresenter } from "./users/presentation/user.presenter";

function main(){
	const entrypoint = new UserPresenter();
	entrypoint.run();
}
main();
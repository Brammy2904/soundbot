import Command from '../../base/Command';

export class HelpCommand extends Command {
  public readonly triggers = ['soundcommands'];

  public run() {
    // noop
  }
}
